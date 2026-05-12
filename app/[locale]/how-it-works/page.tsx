import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "About",

  description:
    "Kairos Detectives unisce storytelling investigativo, thriller psicologici ed esperienze cinematiche immersive.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-32 md:px-8">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.15),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* HERO */}

          <div className="max-w-4xl">

            <span className="text-sm uppercase tracking-[0.45em] text-red-500">
              How It Works
            </span>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              COME
              <br />
              FUNZIONA
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Kairos Detectives trasforma un'indagine investigativa in un'esperienza cinematografica interattiva.
              Analizza documenti, collega prove e ricostruisci la verità.
            </p>

          </div>

          {/* STEPS */}

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Step 01
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Apri il dossier
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Ricevi documenti investigativi realistici, articoli, prove fotografiche e materiali esclusivi.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Step 02
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Analizza le prove
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Collega informazioni, scopri contraddizioni e ricostruisci gli eventi.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Step 03
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Collabora
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Gioca da solo o in gruppo. Confronta teorie e interpreta ogni dettaglio.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Step 04
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Scopri la verità
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Ogni caso nasconde colpi di scena, dettagli nascosti e nuove interpretazioni.
              </p>

            </div>

          </div>

        </div>

      </section>
    <Footer />
    </main>
  );
}