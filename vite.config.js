import { defineConfig } from "vite";

export default defineConfig({
    base: "/Color_Scheme_Generator/",
    build: {
        outDir: "dist",
    },
    server: {
        fs: {
            strict: false,
        },
    },
    define: {
        global: "globalThis",
    },
});
