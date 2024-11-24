import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Frame } from "~/components/Frame";
import { links } from "~/content/links";
import { getLang, getLangFromLoaderData, useLangContext } from "~/lang/lang";

export async function loader({ params }: LoaderFunctionArgs) {
    return { lang: getLang(params) };
}

export const meta: MetaFunction = ({ data }) => {
    const lang = getLangFromLoaderData(data);
    return [{ title: lang == "es" ? "Contáctenos | Railab" : "Contact us | Railab" }];
};

export default function Index() {
    const lang = useLangContext();
    return (
        <div className='pt-28 lg:pt-48 '>
            <Frame className='grid gap-10'>
                <h1 className='font-extrabold text-4xl text-center'>{lang == "es" ? "Contáctenos" : "Contact us"}</h1>
                <ContactLinks />
            </Frame>
        </div>
    );
}

const contactLinks: { route: string; label: string }[] = [
    {
        label: "(+53) 5 413 21 20",
        route: "tel:5354132120",
    },
    ...links.getSocialLinks(),
];
function ContactLinks() {
    return (
        <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {contactLinks.map((link) => {
                return (
                    <li
                        key={link.route}
                        className='w-full block'
                    >
                        <a
                            href={link.route}
                            className=' block text-center bg-slate-100 dark:bg-slate-800 font-medium rounded-lg px-3 py-3 border-slate-400/20 hover:bg-blue-100 hover:text-primary-hover duration-200'
                        >
                            {link.label}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
