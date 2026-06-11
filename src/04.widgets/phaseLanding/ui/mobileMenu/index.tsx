"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { NAV } from "../phaseHeader";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  // lock the page scroll while the menu is open, restore it on close
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="fixed inset-0 z-[70] flex w-full flex-col bg-white px-5 py-5 md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 320, damping: 34 }}
        >
          <div className="flex items-center justify-between">
            <span className="rounded-lg bg-black/[0.04] px-3 py-1.5 text-lg font-bold tracking-tight text-[#181818]">
              PHASE
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="rounded-lg bg-black/[0.04] p-2 text-[#181818]"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col">
            {NAV.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="relative flex items-start gap-2 border-b border-black/10 py-5 text-[40px] font-medium leading-none tracking-[-0.03em] text-[#050505]"
              >
                {item.label}
                <span className="text-xs font-medium text-[#BF57F3]">
                  0{index + 1}
                </span>

                {item.href === "#for-whom" && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src="/images/phase/start-wishing.svg"
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-8 w-36 select-none -rotate-3"
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3">
            <button
              type="button"
              className="flex h-[42px] items-center justify-center gap-2 rounded-xl bg-[#FFD000] text-sm font-semibold text-[#181818]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/phase/arrow-reply.svg"
                alt=""
                aria-hidden
                className="size-5"
              />
              Create you Phase
            </button>
            <button
              type="button"
              className="h-[42px] rounded-xl border border-[#181818] text-sm font-semibold text-[#181818]"
            >
              Log in
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
