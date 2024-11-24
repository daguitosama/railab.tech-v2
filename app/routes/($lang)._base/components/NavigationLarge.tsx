import { NavLink } from "@remix-run/react";
import clsx from "clsx";
import { ComponentProps } from "react";
import { Frame } from "~/components/Frame";
import { LangSwitcher } from "~/components/LangSwitcher";
import { NavigationLink, links } from "~/content/links";
import { localizeRoute, useLangContext } from "~/lang/lang";
import { Logo } from "./Logo";

export function NavigationLarge({ className }: ComponentProps<"div">) {
    return (
        <div className={clsx(className, "bg-surface-light dark:bg-surface-dark")}>
            <Frame className='grid grid-cols-3 '>
                {/* logo */}
                <div className='flex  items-start'>
                    <Logo className=' w-[120px] h-[70px]' />
                </div>

                {/* links */}
                <div className='flex items-center justify-center'>
                    <MenuLinks />
                </div>

                <div className='flex items-center justify-end'>
                    <LangSwitcher
                        layout='minimal'
                        iconClass='size-5'
                        className='border border-black/10 dark:border-slate-100/10 rounded-full px-2 py-2'
                    />
                </div>
            </Frame>
        </div>
    );
}

function MenuLinks() {
    const lang = useLangContext();
    const navigationLinks = links.getNavigationLinks(lang);
    return (
        <div>
            {navigationLinks.map((link) => (
                <MenuNavigationLink
                    link={link}
                    key={link.route}
                />
            ))}
        </div>
    );
}

function MenuNavigationLink({ link }: { link: NavigationLink }) {
    const lang = useLangContext();
    return (
        <NavLink
            key={link.route}
            to={localizeRoute(link.route, lang)}
            end
            className={({ isActive, isPending }) =>
                isPending ? " px-4 py-2 rounded-lg" : isActive ? " font-medium px-4 py-2 rounded-lg " : "opacity-50  px-4 py-2 rounded-lg"
            }
        >
            {link.label}
        </NavLink>
    );
}
