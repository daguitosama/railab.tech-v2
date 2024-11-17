import { Outlet } from "@remix-run/react";
import { Navigation } from "./Navigation";

export default function BaseLayout() {
    return (
        <div>
            <Navigation />
            <Outlet />
            {/* <div>footer</div> */}
        </div>
    );
}
