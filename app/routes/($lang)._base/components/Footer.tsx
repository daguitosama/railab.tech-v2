import { Link } from "@remix-run/react";
import { Frame } from "~/components/Frame";
import { links } from "~/content/links";
import { useLangContext } from "~/lang/lang";

export function Footer() {
    const lang = useLangContext();
    const navLinks = links.getNavigationLinks(lang);
    const socialLinks = links.getSocialLinks();
    return (
        <footer className=' mt-10 '>
            <Frame className='border-t border-t-black/10 dark:border-t-white/10 py-10 grid gap-10'>
                <div>
                    <ul className='flex justify-center items-center flex-wrap gap-4'>
                        {navLinks.map((link) => {
                            return (
                                <li key={link.route}>
                                    <Link
                                        to={link.route}
                                        className='opacity-70 hover:opacity-100 duration-200'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                        {socialLinks.map((link) => {
                            return (
                                <li key={link.route}>
                                    <Link
                                        to={link.route}
                                        className='opacity-70 hover:opacity-100 duration-200'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className='flex items-center justify-center text-center'>
                    <p className='text-sm opacity-70'>© {new Date().getFullYear()} Railab</p>
                </div>
            </Frame>
        </footer>
    );
}
