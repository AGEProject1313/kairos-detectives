import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "About",

  description:
    "Kairos Detectives unisce storytelling investigativo, thriller psicologici ed esperienze cinematiche immersive.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-32 md:px-8">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.15),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* HERO */}

          <div className="max-w-4xl">

            <span className="text-sm uppercase tracking-[0.45em] text-red-500">
              About Kairos
            </span>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              INVESTIGAZIONI
              <br />
              CINEMATICHE
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Kairos Detectives nasce dall'unione tra storytelling investigativo,
              thriller psicologici ed esperienza immersiva.
            </p>

          </div>

          {/* GRID */}

          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Origini
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Esperienza reale
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Il progetto è sviluppato da un ex investigatore privato con esperienza reale nel settore investigativo.
              </p>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Procedure, dinamiche psicologiche e costruzione narrativa sono ispirate a metodologie investigative autentiche.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Visione
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Nuova generazione
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Kairos trasforma il classico gioco investigativo in una vera esperienza cinematografica interattiva.
              </p>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Ogni caso è progettato per creare immersione, tensione narrativa e coinvolgimento psicologico.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Design
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Materiali realistici
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Dossier, prove fotografiche, articoli e documenti sono progettati per sembrare autentici.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Esperienza
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Immersione totale
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Ogni indagine è costruita per far sentire il giocatore parte reale dell'investigazione.
              </p>

            </div>

          </div>

        </div>

      </section>
    <Footer />
    </main>
  );
}