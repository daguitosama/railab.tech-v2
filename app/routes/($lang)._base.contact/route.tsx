import type { MetaFunction } from "@remix-run/node";
import { useLangContext } from "~/lang/lang";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
    const lang = useLangContext();
    return <div>content with lang: {lang}</div>;
}
