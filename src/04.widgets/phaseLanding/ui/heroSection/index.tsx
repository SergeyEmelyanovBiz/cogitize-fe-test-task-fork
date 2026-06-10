"use client";

import { motion } from "framer-motion";
import { CornerDownLeft } from "lucide-react";
import { Marquee } from "../marquee";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col bg-[#FEFEFE]"
    >
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-10">
        <div className="relative w-full max-w-5xl">
          {/* purple hand-drawn smiley */}
          <motion.svg
            viewBox="0 0 90 56"
            className="absolute -left-2 top-2 z-10 w-16 sm:-left-6 sm:w-24"
            initial={{ opacity: 0, rotate: -12, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260 }}
          >
            <path
              d="M6 22 Q 45 60 84 20"
              stroke="#BF57F3"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="34" cy="10" r="4.5" fill="#BF57F3" />
            <circle cx="56" cy="8" r="4.5" fill="#BF57F3" />
          </motion.svg>

          {/* "Independent minds only" badge */}
          <motion.span
            className="absolute -top-6 right-2 z-10 rounded-full bg-[#BF57F3] px-4 py-1.5 text-sm font-semibold text-white sm:right-8"
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.65, type: "spring", stiffness: 280 }}
          >
            Independent minds only
          </motion.span>

          <motion.img
            src="/images/phase/phase-logo.png"
            alt="PHASE"
            width={1400}
            height={355}
            className="w-full select-none"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        <motion.p
          className="mt-10 text-center text-xl font-medium text-[#181818] sm:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Phase is your personal editorial storefront
        </motion.p>

        <motion.button
          type="button"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FFD000] px-6 py-3.5 text-base font-semibold text-[#181818] transition-transform hover:scale-[1.03]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <CornerDownLeft className="size-5" />
          Create you Phase
        </motion.button>
      </div>

      <Marquee />
    </section>
  );
};
