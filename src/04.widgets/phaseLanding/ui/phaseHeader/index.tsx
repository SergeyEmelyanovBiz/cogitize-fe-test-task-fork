"use client";

import { Menu } from "lucide-react";

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "For whom", href: "#for-whom" },
];

type PhaseHeaderProps = {
  onOpenMenu: () => void;
};

export const PhaseHeader = ({ onOpenMenu }: PhaseHeaderProps) => {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#home"
          className="rounded-lg bg-black/[0.04] px-3 py-1.5 text-xl font-bold tracking-tight text-black"
        >
          PHASE
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#181818] transition-colors hover:bg-black/[0.05]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="hidden rounded-lg border border-[#181818] px-5 py-2 text-base font-medium text-[#050505] transition-colors hover:bg-[#181818] hover:text-white md:block"
        >
          Log in
        </button>

        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenMenu}
          className="rounded-lg p-2 text-[#181818] md:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>
    </header>
  );
};
