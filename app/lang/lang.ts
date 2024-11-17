import { Params } from "@remix-run/react";
import { createContext, useContext } from "react";

//  Specification
export const SupportedLangs = ["en", "es"];
export type Lang = "en" | "es";
//

// Context
export const LangContext = createContext<Lang>("en");
export function useLangContext() {
    return useContext(LangContext);
}

// Utils
export function getLang(params: Params<string>): Lang {
    const lang = params.lang ?? "es";
    if (lang !== "es" && lang !== "en") {
        throw new Response(null, {
            status: 404,
            statusText: `Not Found: Invalid language ${lang}`,
        });
    }
    return lang;
}
export function localizeRoute(route: string /* */, lang: Lang): string {
    if (lang == "es") {
        return route;
    }

    return `/en${route}`;
}

export function getLangFromLoaderData(data: unknown): Lang {
    if (!data) {
        return "es";
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return data?.lang as Lang;
}
