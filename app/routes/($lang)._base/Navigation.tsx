import { useLangContext } from "~/lang/lang";
import { NavigationLarge } from "./NavigationLarge";
import { NavigationMobile } from "./NavigationMobile";

export function Navigation() {
    const lang = useLangContext();
    return (
        <nav
            className=' fixed top-0 left-0 w-full'
            aria-labelledby='main-nav-label'
        >
            <h2
                className='sr-only'
                id='main-nav-label'
            >
                {lang == "en" ? "Main Navigation" : "Navegación principal"}
            </h2>

            <NavigationMobile className='lg:hidden' />
            <NavigationLarge className='hidden lg:block' />
        </nav>
    );
}
