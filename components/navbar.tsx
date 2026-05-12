"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full px-4 pt-4 md:px-8">

        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-2xl">

          {/* LOGO */}

          <Link href="/it" className="relative z-50">
            <Image
              src="/kairos-logo-white.png"
              alt="Kairos Detectives"
              width={120}
              height={40}
              className="h-auto w-[90px] md:w-[120px]"
            />
          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden items-center gap-10 md:flex">

            <Link
              href="/it"
              className="text-sm uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/it/how-it-works"
              className="text-sm uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
            >
              Come Funziona
            </Link>

            <Link
              href="/it/about"
              className="text-sm uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/it/contact"
              className="text-sm uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white"
            >
              Contatti
            </Link>

          </nav>

          {/* CTA DESKTOP */}

          <Link
            href="/it/cases/verita-sospesa"
            className="hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105 md:block"
          >
            Acquista
          </Link>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 text-white md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >

        <Link
          href="/it"
          onClick={() => setOpen(false)}
          className="text-2xl uppercase tracking-[0.25em] text-white"
        >
          Home
        </Link>

        <Link
          href="/it/how-it-works"
          onClick={() => setOpen(false)}
          className="text-2xl uppercase tracking-[0.25em] text-white"
        >
          Come Funziona
        </Link>

        <Link
          href="/it/about"
          onClick={() => setOpen(false)}
          className="text-2xl uppercase tracking-[0.25em] text-white"
        >
          About
        </Link>

        <Link
          href="/it/contact"
          onClick={() => setOpen(false)}
          className="text-2xl uppercase tracking-[0.25em] text-white"
        >
          Contatti
        </Link>

        <Link
          href="/it/cases/verita-sospesa"
          onClick={() => setOpen(false)}
          className="mt-4 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black"
        >
          Acquista
        </Link>

      </div>
    </>
  );
}