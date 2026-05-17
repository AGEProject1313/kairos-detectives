"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-2xl md:px-8">

        {/* LOGO */}

        <Link
          href="/it"
          className="flex items-center gap-3"
        >

          <Image
            src="/kairos-logo-white.png"
            alt="Kairos Detectives"
            width={160}
            height={40}
            className="h-auto w-[120px] md:w-[160px]"
            priority
          />

        </Link>

        {/* NAV */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            href="/it"
            className="text-sm uppercase tracking-[0.25em] text-zinc-300 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/it/how-it-works"
            className="text-sm uppercase tracking-[0.25em] text-zinc-300 transition hover:text-white"
          >
            Come Funziona
          </Link>

          <Link
            href="/it/about"
            className="text-sm uppercase tracking-[0.25em] text-zinc-300 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/it/contact"
            className="text-sm uppercase tracking-[0.25em] text-zinc-300 transition hover:text-white"
          >
            Contatti
          </Link>

        </nav>

        {/* CTA */}

        <a
          href="https://www.amazon.it/dp/B0DMMF4W8Z"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
        >
          Acquista
        </a>

      </div>

    </header>
  );
}