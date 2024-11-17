import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";

import { LoaderFunctionArgs } from "@remix-run/node";
import { LangContext, getLang } from "./lang/lang";
import "./tailwind.css";

export async function loader({ params }: LoaderFunctionArgs) {
    return {
        lang: getLang(params),
    };
}

export function Layout({ children }: { children: React.ReactNode }) {
    const { lang } = useLoaderData<typeof loader>();
    return (
        <html lang={lang}>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body className='antialiased text-base-text-color'>
                <LangContext.Provider value={lang}>
                    {/*  */}
                    {children}
                    {/*  */}
                </LangContext.Provider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
