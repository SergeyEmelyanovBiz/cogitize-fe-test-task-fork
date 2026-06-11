"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV } from "../phaseHeader";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="md:hidden">
          {/* dimmed backdrop */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="fixed inset-0 z-[60] cursor-default bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* panel slides in from the right, over the content */}
          <motion.aside
            className="fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-sm flex-col bg-white px-5 py-5"
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
                      className="pointer-events-none absolute right-6 top-7 w-32 select-none -rotate-3"
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#FFD000] py-3.5 text-sm font-semibold text-[#181818]"
              >
                ↳ Create you Phase
              </button>
              <button
                type="button"
                className="rounded-xl border border-[#181818] py-3.5 text-sm font-semibold text-[#181818]"
              >
                Log in
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};
