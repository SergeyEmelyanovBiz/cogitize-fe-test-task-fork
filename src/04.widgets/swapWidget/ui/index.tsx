"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SwapForm } from "@/05.features";

export const SwapWidget = () => {
  const t = useTranslations("swap");

  return (
    <section className="flex min-h-dvh w-full flex-col items-center justify-center gap-10 bg-white px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-4xl font-extrabold text-black"
      >
        {t("convert")}
      </motion.h1>
      <SwapForm />
    </section>
  );
};

