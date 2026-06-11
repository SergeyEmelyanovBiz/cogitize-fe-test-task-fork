"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const asset = (name: string) => `/images/phase/${name}`;

const STEPS = [
  {
    n: "01",
    title: "Create your account",
    body: "Sign up in under a minute. Claim your unique name and make the space yours.",
    sticker: "sticker-start.svg",
    decal: "card-bg-1.svg",
    base: "#FFD909",
  },
  {
    n: "02",
    title: "Add your wishes",
    body: "Create lots: add a photo, title, price, and link to the item. Dream big — from a cup of coffee to a brand-new microphone.",
    sticker: "sticker-add.svg",
    decal: "card-bg-2.svg",
    base: "#BF57F3",
  },
  {
    n: "03",
    title: "Share with your fans",
    body: "Copy your link and drop it in your bio, stories, or video description. Fans visit your storefront and gift you exactly what you want.",
    sticker: "sticker-share.svg",
    decal: "card-bg-3.svg",
    base: "#FFD909",
  },
] as const;

const DURATION = 5;

// Vertical placement of the two stickers per step.
const STICKER_POS = [
  { left: "top-[30%]", right: "top-[52%]" },
  { left: "top-[30%]", right: "top-[52%]" },
  { left: "top-[24%]", right: "top-[58%]" },
] as const;

// A distinct entrance for the sticker on each step.
const STICKER_IN = [
  // START — pop
  { initial: { scale: 0, opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 13 } },
  // ADD — drop from above
  { initial: { y: -70, opacity: 0 }, transition: { type: "spring", stiffness: 240, damping: 15 } },
  // SHARE — spin in
  { initial: { rotate: 110, scale: 0.4, opacity: 0 }, transition: { duration: 0.6, ease: "backOut" } },
] as const;

export const StepsSection = () => {
  const [step, setStep] = useState(0);
  const active = STEPS[step];

  return (
    <section
      id="features"
      className="overflow-hidden bg-[#181818] px-6 py-28 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Left — heading */}
        <div className="relative">
          <h2 className="text-center font-black uppercase leading-[0.92] tracking-tight text-[16vw] sm:text-left sm:text-[clamp(2.5rem,8vw,7rem)]">
            Three steps to drops
          </h2>
          <span className="absolute left-[55%] top-[20%] -translate-x-1/2 isolate inline-block -rotate-2 px-3 py-0.5 text-sm font-medium text-white sm:bottom-[29%] sm:left-[27%] sm:top-auto sm:translate-x-0">
            <img
              src={asset("simple-line.svg")}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full"
            />
            It’s that simple
          </span>
        </div>

        {/* Right — stories card + intro */}
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center">
          <div className="relative w-full max-w-[335px] sm:max-w-[431px]">
            {/* white polaroid frame: 5px sides/top, 19px bottom */}
            <div className="bg-white pt-[5px] pr-[5px] pb-[19px] pl-[5px] shadow-2xl">
              {/* yellow/purple card — clips decal + content (not the stickers) */}
              <div
                className="relative aspect-[325/421] overflow-hidden sm:aspect-[421/610]"
                style={{ backgroundColor: active.base }}
              >
                {/* all decals preloaded; active one shown instantly via opacity */}
                {STEPS.map((s, i) => (
                  <img
                    key={s.decal}
                    src={asset(s.decal)}
                    alt=""
                    className={`absolute inset-0 h-full w-full ${
                      i === step ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* progress bars */}
                <div className="absolute inset-x-5 top-5 z-30 flex gap-1.5">
                  {STEPS.map((_, i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 overflow-hidden rounded-full bg-black/20"
                    >
                      {i < step && <div className="h-full w-full bg-black" />}
                      {i === step && (
                        <motion.div
                          key={step}
                          className="h-full bg-black"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: DURATION, ease: "linear" }}
                          onAnimationComplete={() =>
                            setStep((s) => (s + 1) % STEPS.length)
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="relative flex h-full flex-col p-5 pt-12 text-[#181818] sm:p-6 sm:pt-14">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-full bg-[#050505] text-[7px] font-extrabold tracking-tight text-[#FFD909]">
                      GIFTY
                    </span>
                    <span className="text-base font-semibold">Gifty</span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-[32%] flex flex-col text-left sm:mt-auto"
                    >
                      <p className="text-base font-medium leading-5 sm:text-xl sm:leading-6">
                        {active.n}
                      </p>
                      <h3 className="mt-3 text-[28px] font-medium leading-[30px] sm:mt-4 sm:text-[44px] sm:leading-[48px]">
                        {active.title}
                      </h3>
                      <p className="mt-5 text-lg font-normal leading-6 sm:mt-10 sm:text-2xl sm:leading-[28px]">
                        {active.body}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* stickers — outside the clipped card; a different entrance per step */}
            <motion.img
              key={`sticker-l-${step}`}
              src={asset(active.sticker)}
              alt=""
              initial={STICKER_IN[step].initial}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: -6 }}
              transition={STICKER_IN[step].transition}
              className={`absolute -left-8 ${STICKER_POS[step].left} z-20 w-28 sm:w-36`}
            />
            <motion.img
              key={`sticker-r-${step}`}
              src={asset(active.sticker)}
              alt=""
              initial={STICKER_IN[step].initial}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 6 }}
              transition={STICKER_IN[step].transition}
              className={`absolute -right-10 ${STICKER_POS[step].right} z-20 w-28 sm:w-36`}
            />

            {/* preload stickers to avoid a flash on slide change */}
            <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
              {STEPS.map((s) => (
                <img key={s.sticker} src={asset(s.sticker)} alt="" />
              ))}
            </div>
          </div>

          <div className="w-full max-w-[290px] shrink-0 pt-4 text-center lg:w-36 lg:max-w-none lg:pt-8 lg:text-left">
            <p className="text-lg font-bold">Create, add, share.</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Everything you need to start receiving gifts without the friction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
