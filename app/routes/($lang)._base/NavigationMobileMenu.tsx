import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import * as Dialog from "@radix-ui/react-dialog";
import { NavLink } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Frame } from "~/components/Frame";
import { NavigationLink, getNavigationLinks } from "~/content/links";
import { useBodyOverflow } from "~/hooks/useBodyOverflow";
import { localizeRoute, useLangContext } from "~/lang/lang";
import { Logo } from "./Logo";

export function NavigationMobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const { hideOverflow, showOverflow } = useBodyOverflow();
    function onOpenChange(newIsOpen: boolean) {
        setIsOpen(newIsOpen);
    }

    function closeWholeMeu() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            hideOverflow();
        } else {
            showOverflow();
        }
    }, [isOpen]);

    return (
        <Dialog.Root
            open={isOpen}
            onOpenChange={onOpenChange}
        >
            <Dialog.Trigger
                aria-label='Open Navigation Menu'
                className=''
            >
                <Bars2Icon className='size-6' />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Content className='fixed left-0 top-0 z-30 h-full w-screen overflow-y-auto bg-white data-[state=closed]:animate-[mobile-menu-hide_200ms] data-[state=open]:animate-[mobile-menu-show_300ms]'>
                    <Dialog.Title className='sr-only'>Navigation Menu</Dialog.Title>
                    <Frame className='py-4 flex items-center justify-between'>
                        <Logo
                            onClick={closeWholeMeu}
                            className='w-auto h-8'
                        />

                        <Dialog.Close>
                            <XMarkIcon className='size-6' />
                        </Dialog.Close>
                    </Frame>
                    <MenuLinks onClose={closeWholeMeu} />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

function MenuLinks({ onClose }: { onClose: () => void }) {
    const lang = useLangContext();
    const navigationLinks = getNavigationLinks(lang);
    return (
        <Frame className=' grid gap-8 pt-4'>
            <div className='grid gap-2'>
                {navigationLinks.map((link) => (
                    <MenuNavigationLink
                        link={link}
                        key={link.route}
                        onClose={onClose}
                    />
                ))}
            </div>
        </Frame>
    );
}

function MenuNavigationLink({ link, onClose }: { link: NavigationLink; onClose: () => void }) {
    const lang = useLangContext();
    return (
        <NavLink
            key={link.route}
            to={localizeRoute(link.route, lang)}
            onClick={onClose}
            end
            className={({ isActive, isPending }) =>
                isPending
                    ? "text-lg px-4 py-2 rounded-lg"
                    : isActive
                    ? "text-lg bg-blue-50 text-primary font-medium px-4 py-2 rounded-lg "
                    : "text-lg px-4 py-2 rounded-lg"
            }
        >
            {link.label}
        </NavLink>
    );
}
