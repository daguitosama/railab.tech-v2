import { Outlet } from "@remix-run/react";

export default function WebLayout() {
    return (
        <div>
            <div>navigation</div>
            <Outlet />
            <div>footer</div>
        </div>
    );
}
