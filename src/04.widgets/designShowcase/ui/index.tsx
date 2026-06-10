"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { Button } from "@/07.shared/components";
import { FeaturedBlock } from "./featuredBlock";

const Reveal = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export const DesignShowcase = () => {
  const t = useTranslations("design");

  return (
    <div className="min-h-dvh w-full bg-gradient-to-b from-[#0c0c0e] to-[#16181d] px-6 py-24 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-32">
        <section className="flex flex-col items-center gap-4 text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-full border border-[#16C784]/40 px-4 py-1 text-xs font-medium text-[#16C784]"
          >
            {t("badge")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-extrabold sm:text-5xl"
          >
            {t("heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md text-gray-400"
          >
            {t("heroSubtitle")}
          </motion.p>
        </section>

        <section className="grid gap-6 sm:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="h-40 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold">{t("section1Title")}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  {t("section1Text")}
                </p>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          {[1, 2].map((index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold">{t("section2Title")}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  {t("section2Text")}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </section>

        <section className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <Reveal>
            <div className="max-w-sm">
              <h2 className="text-2xl font-bold">{t("section3Title")}</h2>
              <p className="mt-3 text-gray-400">{t("section3Text")}</p>
              <Link href="/swap">
                <Button className="mt-6 w-auto px-6">{t("cta")}</Button>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <FeaturedBlock />
          </Reveal>
        </section>
      </div>
    </div>
  );
};

