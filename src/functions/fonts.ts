import {
    Roboto, Raleway, Roboto_Slab,
    Lora, Playfair_Display,
    Montserrat, Merriweather
} from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"], // escolha os pesos que desejar
    variable: "--font-roboto",
    display: "swap",
});

export const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '700'], // 700 para títulos, 400 se quiser títulos mais leves
    variable: '--font-raleway',
    display: 'swap',
});

export const robotoSlab = Roboto_Slab({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-roboto-slab',
    display: 'swap',
});

export const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lora',
    display: 'swap',
});

export const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-playfair',
    display: 'swap',
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-merriweather',
    display: 'swap',
});
