import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "About",

  description:
    "Kairos Detectives unisce storytelling investigativo, thriller psicologici ed esperienze cinematiche immersive.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-32 md:px-8">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.15),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* HERO */}

          <div className="max-w-4xl">

            <span className="text-sm uppercase tracking-[0.45em] text-red-500">
              Contact
            </span>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              CONTATTI
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Partnership, collaborazioni, supporto o richieste stampa.
            </p>

          </div>

          {/* GRID */}

          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            {/* CONTACT INFO */}

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Email
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Contattaci
              </h2>

              <div className="mt-8 space-y-6">

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Business
                  </p>

                  <p className="mt-2 text-lg text-white">
                    business@escaperoom-milano.com
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Supporto
                  </p>

                  <p className="mt-2 text-lg text-white">
                    support@kairosdetectives.com
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                    Press
                  </p>

                  <p className="mt-2 text-lg text-white">
                    press@escaperoom-milano.com
                  </p>
                </div>

              </div>

            </div>

            {/* INFO */}

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">

              <span className="text-xs uppercase tracking-[0.35em] text-red-500">
                Kairos Detectives
              </span>

              <h2 className="mt-5 text-3xl font-black uppercase">
                Esperienze investigative cinematiche
              </h2>

              <p className="mt-8 leading-relaxed text-zinc-400">
                Thriller psicologici, dossier investigativi e casi interattivi progettati per creare immersione totale.
              </p>

              <p className="mt-6 leading-relaxed text-zinc-400">
                Per partnership commerciali, creators, eventi o collaborazioni media puoi contattarci direttamente via email.
              </p>

            </div>

          </div>

        </div>

      </section>
    <Footer />
    </main>
  );
}