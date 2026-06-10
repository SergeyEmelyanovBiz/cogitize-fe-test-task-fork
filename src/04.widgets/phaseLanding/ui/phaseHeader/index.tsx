"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { classes } from "@/07.shared/lib";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "For whom", href: "#for-whom" },
];

export const PhaseHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          onClick={() => setMenuOpen(true)}
          className="rounded-lg p-2 text-[#181818] md:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white p-6 md:hidden"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-extrabold text-[#181818]">
                PHASE
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="p-2 text-[#181818]"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-6">
              {NAV.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-2 text-3xl font-bold text-[#181818]"
                >
                  {item.label}
                  <span className="text-xs font-medium text-[#BF57F3]">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-12 flex flex-col gap-3">
              <button
                type="button"
                className={classes(
                  "rounded-xl bg-[#FFD000] py-3 text-sm font-semibold text-[#181818]",
                )}
              >
                ↳ Create you Phase
              </button>
              <button
                type="button"
                className="rounded-xl border border-[#181818] py-3 text-sm font-semibold text-[#181818]"
              >
                Log in
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
