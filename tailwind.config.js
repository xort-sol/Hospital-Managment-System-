/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                blue_color: "#003C73",
                blue_color_dark: "#002C55",
                sky_color: "#E9F0F6",
                gray_color: "#455A64",
            },
        },
    },
    plugins: [],
};
