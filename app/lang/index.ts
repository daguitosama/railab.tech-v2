import { Params } from "@remix-run/react";
import { createContext, useContext } from "react";

//  Specification
export const SupportedLangs = ["en", "es"];
export type Lang = "en" | "es";
//

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

// Context
export const LangContext = createContext("en");
export function useLangContext() {
    return useContext(LangContext);
}
