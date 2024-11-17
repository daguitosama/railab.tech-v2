import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            // fontFamily: {
            // },
            colors: {
                primary: "#006ee6",
                "primary-hover": "#0055b3",
                "base-text-color": "rgb(32 35 60);",
            },
        },
    },
    plugins: [],
} satisfies Config;
