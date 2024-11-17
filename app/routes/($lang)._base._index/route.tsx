import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Frame } from "~/components/Frame";
import { getLang, getLangFromLoaderData } from "~/lang/lang";
import { Intro } from "./components/Intro";
import { Services } from "./components/Services";

export async function loader({ params }: LoaderFunctionArgs) {
    return { lang: getLang(params) };
}

export const meta: MetaFunction = ({ data }) => {
    const lang = getLangFromLoaderData(data);
    return [{ title: lang == "es" ? "Servicio de reparación de MacBooks, iMacs y Macs | Railab" : "MacBook, iMac and Mac repair service | Railab" }];
};

export default function Index() {
    return (
        <Frame className='grid gap-20 md:gap-32'>
            <Intro />
            <Services />
        </Frame>
    );
}
