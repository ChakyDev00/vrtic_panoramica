import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fredoka = localFont({
  src: [
    { path: "./fonts/fredoka-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/fredoka-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/fredoka-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/fredoka-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Panoramica | Lepši pogled na detinjstvo",
  description: "Upoznajte Panoramicu i Panoramicu Junior na Voždovcu. Programi od jaslenog do predškolskog uzrasta, CLIL, sopstvena kuhinja i pažnja posvećena svakom detetu.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Panoramica — lepši pogled na detinjstvo",
    description: "Mesto za igru, istraživanje i odrastanje, uz pažnju posvećenu svakom detetu.",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr-Latn" className={fredoka.variable}>
      <body>{children}</body>
    </html>
  );
}
