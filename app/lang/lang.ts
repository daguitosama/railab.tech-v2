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
    const lang = params.lang ?? "en";
    if (lang !== "es" && lang !== "en") {
        throw new Response(null, {
            status: 404,
            statusText: `Not Found: Invalid language ${lang}`,
        });
    }
    return lang;
}
export function localizeRoute(route: string /* */, lang: Lang): string {
    if (lang == "en") {
        return route;
    }

    return `/es${route}`;
}