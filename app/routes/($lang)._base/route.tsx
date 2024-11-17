import { Outlet } from "@remix-run/react";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function BaseLayout() {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
}
