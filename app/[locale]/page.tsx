import HomeClient from "@/components/home-client";

export const metadata = {
  title: "Kairos Detectives",

  description:
    "Esperienze investigative cinematiche. Thriller psicologici, dossier interattivi e casi investigativi premium da risolvere.",

  openGraph: {
    title: "Kairos Detectives",

    description:
      "Esperienze investigative cinematiche e thriller psicologici.",

    images: [
      {
        url: "/og-cover.png",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}