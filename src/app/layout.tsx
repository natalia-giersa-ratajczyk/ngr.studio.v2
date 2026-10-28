import type { Metadata } from "next";

import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-main",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ngr.studio | witaj w moim front-endowym świecie",
  description:
    "Potrzebujesz strony wizytówki przedstawiającej Ciebie lub Twój produkt? Chętnie pomogę Ci taką stworzyć",
  openGraph: {
    title: "ngr.studio | witaj w moim front-endowym świecie",
    description:
      "Potrzebujesz strony wizytówki przedstawiającej Ciebie lub Twój produkt? Chętnie pomogę Ci taką stworzyć",
    images: {
      url: "/og-image.jpg",
      width: 1277,
      height: 597,
    },
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={manrope.variable}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
