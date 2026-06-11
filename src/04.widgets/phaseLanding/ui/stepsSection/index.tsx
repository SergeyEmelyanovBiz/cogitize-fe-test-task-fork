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

export const StepsSection = () => {
  const [step, setStep] = useState(0);
  const active = STEPS[step];

  return (
    <section
      id="features"
      className="overflow-hidden bg-[#181818] px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        {/* Left — heading */}
        <div className="relative">
          <h2 className="font-black uppercase leading-[0.92] tracking-tight text-[clamp(2.5rem,8vw,7rem)]">
            Three steps to drops
          </h2>
          <span className="relative isolate ml-1 mt-2 inline-block px-3 py-0.5 text-sm font-medium text-white">
            <img
              src={asset("simple-line.svg")}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full"
            />
            It’s that simple
          </span>
        </div>

        {/* Right — stories card + intro */}
        <div className="relative mx-auto flex w-full max-w-md items-start gap-6">
          <div className="relative w-full max-w-[340px]">
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

            {/* card */}
            <div
              className="relative aspect-[421/610] overflow-hidden rounded-sm shadow-2xl"
              style={{ backgroundColor: active.base }}
            >
              <img
                src={asset(active.decal)}
                alt=""
                className="absolute inset-0 h-full w-full"
              />

              <div className="relative flex h-full flex-col p-6 pt-10 text-[#181818]">
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
                    className="mt-[34%] flex flex-1 flex-col"
                  >
                    <p className="text-sm font-medium">{active.n}</p>
                    <h3 className="mt-2 text-3xl font-bold leading-tight">
                      {active.title}
                    </h3>
                    <p className="mt-auto text-base font-medium">{active.body}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* stickers */}
              <img
                src={asset(active.sticker)}
                alt=""
                className="absolute -left-6 top-[34%] z-20 w-28 -rotate-6"
              />
              <img
                src={asset(active.sticker)}
                alt=""
                className="absolute -right-8 top-[56%] z-20 w-28 rotate-6"
              />
            </div>
          </div>

          {/* intro text */}
          <div className="hidden w-40 shrink-0 pt-6 lg:block">
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
