import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kairosdetectives.com"),

  title: {
    default: "Kairos Detectives",
    template: "%s | Kairos Detectives",
  },

  description:
    "Esperienze investigative cinematiche. Thriller psicologici, dossier interattivi e casi investigativi premium da risolvere.",

  keywords: [
    "gioco investigativo",
    "thriller investigativo",
    "gioco detective",
    "cold case game",
    "true crime game",
    "murder mystery",
    "gioco da tavolo investigativo",
    "kairos detectives",
  ],

  openGraph: {
    title: "Kairos Detectives",
    description:
      "Esperienze investigative cinematiche e casi da risolvere.",

    url: "https://www.kairosdetectives.com",

    siteName: "Kairos Detectives",

    locale: "it_IT",

    type: "website",

    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Kairos Detectives",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kairos Detectives",
    description:
      "Esperienze investigative cinematiche e thriller psicologici.",

    images: ["/og-cover.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}