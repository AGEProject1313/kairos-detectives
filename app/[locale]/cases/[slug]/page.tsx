import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import { cases } from "@/data/cases";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props) {

  const { slug } = await params;

  const currentCase = cases.find(
    (item) => item.slug === slug
  );

  if (!currentCase) {
    return {};
  }

  return {
    title: currentCase.title,

    description: currentCase.description,

    openGraph: {
      title: currentCase.title,

      description: currentCase.description,

      images: [
        {
          url: currentCase.cover,
        },
      ],
    },
  };
}

export default async function CasePage({ params }: Props) {

  const { slug } = await params;

  const currentCase = cases.find(
    (item) => item.slug === slug
  );

  if (!currentCase) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}

      <section className="relative overflow-hidden pt-32">

        {/* BACKGROUND */}

        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.22),transparent_45%)]" />

          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:120px_120px]" />
          </div>

        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-24 md:px-8 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <Link
              href="/it"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white"
            >
              ← Torna ai dossier
            </Link>

            <span className="mt-8 block text-sm uppercase tracking-[0.45em] text-red-500">
              {currentCase.chapter}
            </span>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              {currentCase.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              {currentCase.description}
            </p>

            {/* INFO */}

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Durata
                </p>

                <p className="mt-2 text-lg text-white">
                  {currentCase.duration}
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Giocatori
                </p>

                <p className="mt-2 text-lg text-white">
                  {currentCase.players}
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Difficoltà
                </p>

                <p className="mt-2 text-lg text-red-400">
                  {currentCase.difficulty}
                </p>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href={currentCase.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
              >
                Acquista su Amazon
              </a>

              <a
                href="#details"
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Analizza il dossier
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute h-[500px] w-[500px] rounded-full bg-red-900/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 shadow-[0_0_120px_rgba(120,0,0,0.22)]">

              <div className="absolute inset-0 z-10 bg-[linear-gradient(130deg,rgba(255,255,255,0.14),transparent_35%)] opacity-40" />

              <Image
                src={currentCase.cover}
                alt={currentCase.title}
                width={700}
                height={1000}
                className="h-auto w-[320px] object-cover sm:w-[400px] lg:w-[460px]"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            </div>

          </div>

        </div>

      </section>

      {/* DETAILS */}

      <section
        id="details"
        className="relative z-10 border-t border-white/5 px-6 py-24 md:px-8"
      >

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

          {/* STORY */}

          <div>

            <span className="text-sm uppercase tracking-[0.45em] text-red-500">
              Il Caso
            </span>

            <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
              Ogni dettaglio conta
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-zinc-400">
              Analizza testimonianze, documenti riservati, prove fotografiche e materiali esclusivi.
              Nulla è lasciato al caso.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Ogni scelta investigativa può cambiare completamente la tua interpretazione degli eventi.
            </p>

          </div>

          {/* FEATURES */}

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                Dossier
              </p>

              <h3 className="mt-4 text-2xl uppercase">
                Materiali esclusivi
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Referti, articoli, prove fisiche e documenti investigativi realistici.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                Immersione
              </p>

              <h3 className="mt-4 text-2xl uppercase">
                Esperienza cinematica
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Thriller psicologico costruito come una vera indagine investigativa.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                Multiplayer
              </p>

              <h3 className="mt-4 text-2xl uppercase">
                Coop investigativa
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Collabora con amici, confronta teorie e ricostruisci i fatti.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

              <p className="text-xs uppercase tracking-[0.35em] text-red-500">
                Replayability
              </p>

              <h3 className="mt-4 text-2xl uppercase">
                Nuove interpretazioni
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                Ogni analisi può portare a conclusioni differenti.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}