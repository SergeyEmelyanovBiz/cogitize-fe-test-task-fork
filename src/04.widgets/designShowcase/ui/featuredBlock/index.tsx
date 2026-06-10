"use client";

import { motion } from "framer-motion";

export const FeaturedBlock = () => {
  return (
    <div className="relative flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden rounded-3xl bg-[#0c0c0e]">
      <motion.div
        className="absolute size-56 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #16C784, transparent 40%, #16C784)",
          mask: "radial-gradient(farthest-side, transparent 60%, #000 62%)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent 60%, #000 62%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="size-24 rounded-full bg-[#16C784]"
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            "0 0 0px #16C784",
            "0 0 50px #16C784",
            "0 0 0px #16C784",
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute size-3 rounded-full bg-white"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ originX: "50%", originY: "50%" }}
        >
          <span
            className="absolute block size-3 rounded-full bg-white"
            style={{ transform: `translateX(${90 + index * 14}px)` }}
          />
        </motion.div>
      ))}
    </div>
  );
};

