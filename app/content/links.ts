import { Lang } from "~/lang/lang";

export interface NavigationLink {
    label: string;
    route: string;
}

const LINKS: Record<string, NavigationLink[]> = {
    en: [
        {
            label: "Services",
            route: "/#services",
        },
        {
            label: "Contact",
            route: "/contact",
        },
    ],
    es: [
        {
            label: "Servicios",
            route: "/#services",
        },
        {
            label: "Contacto",
            route: "/contact",
        },
    ],
};

export function getNavigationLinks(lang: Lang): NavigationLink[] {
    if (!LINKS[lang]) {
        throw new Error("Unavailable link for lang: " + lang);
    }
    return LINKS[lang];
}
