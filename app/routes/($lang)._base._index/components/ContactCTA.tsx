import { Link } from "@remix-run/react";
import { localizeRoute, useLangContext } from "~/lang/lang";

export function ContactCTA() {
    const lang = useLangContext();
    const title = lang == "es" ? "Contáctenos" : "Contact us";
    const subtitle = lang == "es" ? "Arreglemos esa Mac hoy!" : "Let's fix that Mac today!";
    const action = lang == "es" ? "Contáctenos" : "Contact us";
    return (
        <section
            className='bg-gradient-to-tr from-blue-600 via-blue-600 to-primary 
                    text-white p-8 rounded-2xl flex flex-col items-center justify-center
                    gap-5
            '
        >
            <h2 className='text-4xl md:text-5xl font-bold'>{title}</h2>
            <p className='text-xl font-medium'>{subtitle}</p>
            <Link
                to={localizeRoute("/contact", lang)}
                className='bg-white text-primary text-xl rounded-xl px-6 py-3 hover:bg-slate-200'
            >
                {action}
            </Link>
        </section>
    );
}
