"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "YOUR IDENTITY",
  "100%",
  "FREE FOREVER",
  "SHARE WITH YOUR AUDIENCE",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item, index) => (
      <div key={index} className="flex items-center">
        <span className="px-6 text-sm font-semibold uppercase tracking-wide text-[#BF57F3]">
          {item === "100%" ? (
            <span className="rounded-md border border-[#BF57F3] px-2 py-0.5">
              100%
            </span>
          ) : (
            item
          )}
        </span>
        <span className="text-[#BF57F3]/40">|</span>
      </div>
    ))}
  </div>
);

export const Marquee = () => {
  return (
    <div className="overflow-hidden border-y border-[#BF57F3]/30 py-3">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <Row />
        <Row />
        <Row />
        <Row />
      </motion.div>
    </div>
  );
};
