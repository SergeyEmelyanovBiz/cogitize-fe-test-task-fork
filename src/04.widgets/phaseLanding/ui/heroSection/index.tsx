"use client";

import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import { Marquee } from "../marquee";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col bg-[#FEFEFE]"
    >
      <div className="flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-10">
        <div className="relative w-full max-w-6xl">
          {/* purple hand-drawn smiley (from Figma) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src="/images/phase/smiley.svg"
            alt=""
            aria-hidden
            className="absolute -left-1 top-[3%] z-10 w-20 sm:left-1 sm:w-28"
            initial={{ opacity: 0, rotate: -12, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260 }}
          />

          {/* "Independent minds only" badge on a brush stroke (from Figma) */}
          <motion.span
            className="absolute -top-9 right-2 z-10 inline-flex items-center justify-center px-6 py-1.5 sm:right-10"
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.65, type: "spring", stiffness: 280 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/phase/badge-bg.svg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full"
            />
            <span className="relative text-base font-medium text-white sm:text-xl">
              Independent minds only
            </span>
          </motion.span>

          {/* eslint-disable-next-line @next/next/no-img-element */}
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
          className="mt-10 text-center text-xl font-medium text-[#181818]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Phase is your personal editorial storefront
        </motion.p>

        <motion.button
          type="button"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FFD000] px-6 py-3.5 text-base font-medium text-[#050505] transition-transform hover:scale-[1.03]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <CornerDownRight className="size-5" />
          Create you Phase
        </motion.button>
      </div>

      <Marquee />
    </section>
  );
};
