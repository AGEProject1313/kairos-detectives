"use client";

import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { cases } from "@/data/cases";

export default function HomePage() {
  console.log("HOME CLIENT REALE");
  
  const featuredCase = cases[0];

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}

      <section className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-32">

        {/* BACKGROUND */}

        <div className="absolute inset-0 overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-[0.16]"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.22),transparent_45%)]" />

          <div className="absolute inset-0 opacity-[0.025] mix-blend-screen">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:120px_120px]" />
          </div>

        </div>

        {/* RED GLOW */}

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900/10 blur-3xl md:h-[900px] md:w-[900px]" />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 md:px-8 lg:grid-cols-2 lg:gap-24">

          {/* LEFT */}

          <div className="order-2 lg:order-1">

            <span className="mb-5 block text-[11px] uppercase tracking-[0.45em] text-red-500 md:text-sm">
              {featuredCase.chapter}
            </span>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.82] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[8rem]">
              VERITÀ
              <br />
              SOSPESA
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:mt-8 md:text-lg">
              Una governante viene trovata morta in una villa isolata.
              Ogni membro della famiglia nasconde qualcosa.
              Ogni documento può cambiare il corso dell'indagine.
            </p>

            {/* INVESTIGATOR BADGE */}

            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl md:mt-8 md:px-5">

              <div className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,0.9)]" />

              <p className="text-xs text-zinc-300 md:text-sm">
                Sviluppato da un ex investigatore privato.
              </p>

            </div>

            {/* STATS */}

            <div className="mt-8 flex flex-wrap gap-4 md:mt-10 md:gap-6">

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl md:px-5">

                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">
                  Durata
                </p>

                <p className="mt-2 text-base text-white md:text-lg">
                  {featuredCase.duration}
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl md:px-5">

                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">
                  Giocatori
                </p>

                <p className="mt-2 text-base text-white md:text-lg">
                  {featuredCase.players}
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl md:px-5">

                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:text-xs">
                  Difficoltà
                </p>

                <p className="mt-2 text-base text-red-400 md:text-lg">
                  {featuredCase.difficulty}
                </p>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">

              <a
                href={featuredCase.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]"
              >
                Risolvi il caso
              </a>

              <a
                href="#cases"
                className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm text-white backdrop-blur-xl transition hover:bg-white/10"
              >
                Accedi ai dossier
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="order-1 flex justify-center lg:order-2"
          >

            {/* GLOW */}

            <div className="absolute h-[400px] w-[400px] rounded-full bg-red-900/20 blur-3xl md:h-[600px] md:w-[600px]" />

            {/* CARD */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900 shadow-[0_0_120px_rgba(120,0,0,0.22)]"
            >

              <div className="absolute inset-0 z-10 bg-[linear-gradient(130deg,rgba(255,255,255,0.14),transparent_35%)] opacity-40" />

              <Image
                src={featuredCase.cover}
                alt={featuredCase.title}
                width={700}
                height={1000}
                className="h-auto w-[280px] object-cover sm:w-[340px] md:w-[420px] lg:w-[460px]"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,rgba(120,0,0,0.35),transparent_70%)]" />

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* CASES */}

      <section
        id="cases"
        className="relative z-10 px-6 pb-28 md:px-8 md:pb-40"
      >

        <div className="mx-auto max-w-7xl">

          {/* HEADER */}

          <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <span className="text-[11px] uppercase tracking-[0.45em] text-red-500 md:text-sm">
                Case Files
              </span>

              <h2 className="mt-4 text-5xl uppercase tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                I CASI
              </h2>

            </div>

            <p className="max-w-lg text-sm leading-relaxed text-zinc-500 md:text-lg lg:text-right">
              Ogni indagine Kairos è costruita come una vera esperienza investigativa cinematografica.
            </p>

          </div>

          {/* GRID */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {cases.map((item) => (

              <Link
                key={item.slug}
                href={`/it/cases/${item.slug}`}
              >

                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900"
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden">

                    <Image
                      src={item.cover}
                      alt={item.title}
                      width={700}
                      height={1000}
                      className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[520px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  </div>

                  {/* CONTENT */}

                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">

                    <div className="translate-y-4 transition duration-500 group-hover:translate-y-0">

                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">

                        <div className="h-2 w-2 rounded-full bg-red-500" />

                        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-300 md:text-xs">
                          Dossier disponibile
                        </p>

                      </div>

                      <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-300 opacity-100 md:opacity-0 md:transition md:duration-500 md:group-hover:opacity-100">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </motion.div>

              </Link>

            ))}

            {/* CLASSIFIED */}

            <div className="relative overflow-hidden rounded-[28px] border border-dashed border-white/10 bg-white/[0.03]">

              <div className="flex h-[420px] flex-col items-center justify-center px-6 text-center md:h-[520px]">

                <span className="text-[11px] uppercase tracking-[0.45em] text-zinc-600 md:text-xs">
                  Accesso limitato
                </span>

                <h3 className="mt-6 text-4xl uppercase text-zinc-500 md:text-5xl">
                  Classified
                </h3>

              </div>

            </div>

            {/* REDACTED */}

            <div className="relative overflow-hidden rounded-[28px] border border-dashed border-white/10 bg-white/[0.03]">

              <div className="flex h-[420px] flex-col items-center justify-center px-6 text-center md:h-[520px]">

                <span className="text-[11px] uppercase tracking-[0.45em] text-zinc-600 md:text-xs">
                  Nuovo dossier
                </span>

                <h3 className="mt-6 text-4xl uppercase text-zinc-500 md:text-5xl">
                  Redacted
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

{/* INSTAGRAM */}

<section className="relative px-6 pb-24 md:px-8">

  <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-14">

    <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

      <div>

        <span className="text-[11px] uppercase tracking-[0.45em] text-red-500 md:text-sm">
          Social Feed
        </span>

        <h2 className="mt-4 text-4xl uppercase leading-none tracking-[-0.04em] md:text-6xl">
          FOLLOW THE
          <br />
          INVESTIGATION
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-lg">
          Dietro le quinte, nuovi dossier, contenuti cinematici
          e aggiornamenti sui prossimi casi Kairos Detectives.
        </p>

      </div>

      <a
        href="https://www.instagram.com/kairosdetectives/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/10 bg-white px-10 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-black transition duration-300 hover:scale-105"
      >
        Follow Instagram
      </a>

    </div>

  </div>

</section>
    <Footer />
    </main>
  );
}