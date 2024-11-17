import { getNavigationLinks } from "~/content/links";
import { useLangContext } from "~/lang/lang";
import { NavigationMobile } from "./NavigationMobile";

export function Navigation() {
    const lang = useLangContext();
    const navigationLinks = getNavigationLinks(lang);
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

            <NavigationMobile
                className='lg:hidden'
                navigationLinks={navigationLinks}
            />
        </nav>
    );
}
