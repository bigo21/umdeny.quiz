import type { Metadata } from "next";
import { Poppins, Roboto_Condensed, Fraunces } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quiz Patrimonial — Umdeny Capital",
  description:
    "Découvrez votre profil d'investisseur en 5 minutes. Recommandations personnalisées, stratégies adaptées au marché africain.",
  icons: { icon: "/umdeny-pictogram.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${robotoCondensed.variable} ${fraunces.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
