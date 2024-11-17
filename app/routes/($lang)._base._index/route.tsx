import type { MetaFunction } from "@remix-run/node";
import { Frame } from "~/components/Frame";
import { Intro } from "./Intro";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
    return (
        <Frame>
            <Intro />
        </Frame>
    );
}
