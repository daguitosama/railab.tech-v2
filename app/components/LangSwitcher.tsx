import { GlobeAltIcon } from "@heroicons/react/24/outline";
import * as Popover from "@radix-ui/react-popover";
import { Link, useLocation } from "@remix-run/react";
import clsx from "clsx";
import { ComponentProps } from "react";
import { useLangContext } from "~/lang/lang";

interface LangSwitcherProps extends ComponentProps<"button"> {
    layout?: "default" | "minimal";
    iconClass?: string;
    onClose?: () => void;
}

export function LangSwitcher({ layout = "default", iconClass, className, onClose }: LangSwitcherProps) {
    const lang = useLangContext();
    // get current route
    const location = useLocation();

    const alternatePath =
        lang == "es"
            ? `/en${location.pathname}` + location.search + location.hash
            : removeLangPrefix(location.pathname) + location.search + location.hash;

    return (
        <Popover.Root>
            <Popover.Trigger
                aria-label='Open Navigation Menu'
                className={clsx("flex items-center gap-2 ", className)}
            >
                <GlobeAltIcon className={clsx("size-6", iconClass)} />
                {layout == "default" ? <p>{lang == "en" ? "English" : "Español"}</p> : null}
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className='mt-2 relative z-30 w-[300px] lg:w-full min-h-20 px-3 flex items-center justify-center bg-surface-light dark:bg-surface-dark border border-black/10 dark:border-slate-100/10 rounded-lg shadow-lg'>
                    <Link
                        to={alternatePath}
                        preventScrollReset={true}
                        className='px-4 py-2 rounded-lg border border-black dark:border-slate-100/10 w-full'
                        onClick={async () => {
                            if (onClose) {
                                // await new Promise((res) => setTimeout(res, 300));
                                onClose();
                            }
                        }}
                    >
                        {lang == "en" ? "Español" : "English"}
                    </Link>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}

function removeLangPrefix(path: string) {
    //      0 1 2
    //      / e s /path
    return path.slice(3);
}
