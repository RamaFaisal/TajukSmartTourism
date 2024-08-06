import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import daisyui from "daisyui";
import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", ...defaultTheme.fontFamily.sans],
                serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
            },
            colors: {
                color1: "#DEF9C4",
                color2: "#50B498",
                color3: "#219C90",
                color4: "#009FBD",
                colorBg: "#F1FADA",
                // GPT Font
                bgTajuk: "#e8ffcc",
                tajuk: "#7fb53d",
                hijau: "#4CAF50", //Hijau
                putih: "#FFFFFF", //Putih
                biruMuda: "#81D4FA", //Biru Muda
                coklat: "#8D6E63", //Coklat
                hijauGelap: "#388E3C", //Hijau Gelap
                biruTua: "#64B5F6",
            },
            backgroundImage: {
                imgBg: "url('/imgBg1.jpg')",
            },
        },
    },

    plugins: [forms, daisyui, scrollbarHide],
};
