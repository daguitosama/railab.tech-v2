import clsx from "clsx";
import { ComponentProps } from "react";
import { Frame } from "~/components/Frame";
import { Logo } from "./Logo";
import { NavigationMobileMenu } from "./NavigationMobileMenu";

interface NavigationMobileProps extends ComponentProps<"div"> {}

export function NavigationMobile({ className }: NavigationMobileProps) {
    return (
        <div className={clsx(className, "bg-white")}>
            <Frame className=' py-4 flex items-center justify-between'>
                {/* logo */}
                <Logo className='w-auto h-8' />

                {/* menu */}
                <NavigationMobileMenu />
            </Frame>
        </div>
    );
}
