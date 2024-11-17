import clsx from "clsx";
import { ComponentProps } from "react";

export function Frame({ children, className, ...props }: ComponentProps<"div">) {
    return (
        <div
            className={clsx("max-w-screen-xl px-6 md:px-10 mx-auto", className)}
            {...props}
        >
            {children}
        </div>
    );
}
