import { Link } from "@remix-run/react";
import { useLangContext } from "~/lang/lang";

interface IntroContent {
    heading: string;
    subheading: string;
    actionLabel: string;
    actionRoute: string;
    minorActionLabel: string;
    minorActionRoute: string;
}

const content: Record<string, IntroContent> = {
    es: {
        heading: "Repara tu Mac en Cuba",
        subheading: "Transparencia y calidad garantizadas",
        actionLabel: "Contáctenos",
        actionRoute: "/contact",
        minorActionLabel: "Vea nuestros servicios",
        minorActionRoute: "#services",
    },
    en: {
        heading: "Repair your Mac in Cuba",
        subheading: "We guarantee transparency and quality",
        actionLabel: "Contact us",
        actionRoute: "/contact",
        minorActionLabel: "See our services",
        minorActionRoute: "#services",
    },
};

export function Intro() {
    const lang = useLangContext();
    const { heading, subheading, actionLabel, actionRoute, minorActionLabel, minorActionRoute } = content[lang];
    // public
    return (
        <section className='pt-28 lg:pt-48 grid md:grid-cols-2 gap-10'>
            <div className='md:order-2'>
                <img
                    src='/img/home/macbook-air-black.webp'
                    alt='A macbook'
                />
            </div>
            <div className='grid gap-10'>
                <div>
                    <h1 className='font-black text-5xl xl:text-6xl text-center md:text-left'>{heading}</h1>
                    <p className='mt-6 text-center md:text-left text-lg font-semibold'>{subheading}</p>
                </div>

                <div className='flex flex-col md:flex-row  items-center justify-center  md:justify-start gap-4 md:gap-8'>
                    <Link
                        to={actionRoute}
                        className=' block bg-primary hover:bg-primary-hover duration-200 text-white text-lg py-3 px-10 font-medium rounded-2xl'
                    >
                        {actionLabel}
                    </Link>

                    <Link
                        to={minorActionRoute}
                        className=' text-opacity-70 text-center md:text-start'
                    >
                        {minorActionLabel}
                    </Link>
                </div>
            </div>
        </section>
    );
}
