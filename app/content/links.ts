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

const SOCIAL_LINKS: NavigationLink[] = [
    {
        label: "Telegram",
        route: "https://t.me/RaikMac",
    },
    {
        route: "https://wa.me/+5354132120",
        label: "WhatsApp",
    },
    {
        label: "Instagram",
        route: "https://www.instagram.com/railabmac/",
    },
    {
        label: "Facebook",
        route: "https://m.facebook.com/RaiLabMacBook",
    },
    {
        label: "Twitter",
        route: "https://twitter.com/RailabMac",
    },
];

export function getNavigationLinks(lang: Lang): NavigationLink[] {
    if (!LINKS[lang]) {
        throw new Error("Unavailable link for lang: " + lang);
    }
    return LINKS[lang];
}

export const links = {
    getNavigationLinks,
    getSocialLinks() {
        return SOCIAL_LINKS;
    },
};
