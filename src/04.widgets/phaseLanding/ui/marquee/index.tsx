"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "YOUR IDENTITY",
  "100%",
  "FREE FOREVER",
  "SHARE WITH YOUR AUDIENCE",
];

const Divider = () => (
  <span className="mx-6 h-6 border-l border-dashed border-[#BF57F3]/70" />
);

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item, index) => (
      <div key={index} className="flex items-center">
        <Divider />
        {item === "100%" ? (
          <span className="rounded-md border border-dashed border-[#BF57F3] px-2.5 py-1 text-sm font-medium uppercase tracking-wide text-[#BF57F3]">
            100%
          </span>
        ) : (
          <span className="text-sm font-medium uppercase tracking-wide text-[#BF57F3]">
            {item}
          </span>
        )}
      </div>
    ))}
  </div>
);

export const Marquee = () => {
  return (
    <div className="overflow-hidden border-t-2 border-b border-[#BF57F3] border-b-[#BF57F3]/30 py-3.5">
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
