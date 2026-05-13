"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full px-3 pt-3">

        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-2xl">

          {/* LOGO */}

          <Link
            href="/it"
            className="flex-shrink-0"
          >
            <Image
              src="/kairos-logo-white.png"
              alt="Kairos Detectives"
              width={110}
              height={40}
              className="h-auto w-[82px] md:w-[110px]"
              priority
            />
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden md:flex items-center gap-10">

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

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">

            {/* DESKTOP CTA */}

            <Link
              href="/it/cases/verita-sospesa"
              className="hidden md:flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              Acquista
            </Link>

            {/* MOBILE MENU */}

            <button
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black md:hidden"
              aria-label="Open menu"
            >
              <span className="text-2xl leading-none">
                {open ? "✕" : "☰"}
              </span>
            </button>

          </div>

        </div>

      </header>

      {/* MOBILE OVERLAY */}

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/95 backdrop-blur-2xl transition-all duration-300 ${
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
          className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black"
        >
          Acquista
        </Link>

      </div>
    </>
  );
}