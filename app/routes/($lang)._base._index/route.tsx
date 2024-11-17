import type { MetaFunction } from "@remix-run/node";
import { Frame } from "~/components/Frame";
import { useLangContext } from "~/lang/lang";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
    const lang = useLangContext();
    return <Frame>{/* <div>content with lang: {lang}</div> */}</Frame>;
}
