import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
    {
        files: ["src/**/*.{ts,tsx}"],

        extends: [...nextCoreWebVitals, ...nextTypescript],

        rules: {
            "@typescript-eslint/no-explicit-any": "error",
            "@next/next/no-img-element": "off",

            "import/no-internal-modules": ["error", {
                allow: [
                    "**/index.ts",
                    "next/server",
                    "next/navigation",
                    "@reduxjs/toolkit/query/react",
                    "@reduxjs/toolkit/query",
                    "next-intl/middleware",
                    "next-intl/routing",
                    "next-intl/server",
                    "next-intl/navigation",
                    "next/font/google",
                    "/styles/globals.css",
                    "next-intl/plugin",
                    "next/constants.js",
                ],
            }],
        },
    },
    {
        files: ["src/**/index.ts", "src/**/index.tsx"],

        rules: {
            "import/no-internal-modules": "off",
        },
    },
    {
        files: ["**/*.d.ts"],

        rules: {
            "@typescript-eslint/no-empty-object-type": "off",
        },
    },
]);
