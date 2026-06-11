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
      className="overflow-hidden bg-[#181818] px-6 py-28 text-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        {/* Left — heading */}
        <div className="relative">
          <h2 className="font-black uppercase leading-[0.92] tracking-tight text-[clamp(2.5rem,8vw,7rem)]">
            Three steps to drops
          </h2>
          <span className="absolute bottom-[15%] left-[34%] isolate inline-block -rotate-2 px-3 py-0.5 text-sm font-medium text-white">
            <img
              src={asset("simple-line.svg")}
              alt=""
              className="absolute inset-0 -z-10 h-full w-full"
            />
            It’s that simple
          </span>
        </div>

        {/* Right — stories card + intro */}
        <div className="flex items-start justify-center gap-6">
          <div className="relative w-full max-w-[431px]">
            {/* white polaroid frame: 5px sides/top, 19px bottom */}
            <div className="bg-white pt-[5px] pr-[5px] pb-[19px] pl-[5px] shadow-2xl">
              {/* yellow/purple card — clips decal + content (not the stickers) */}
              <div
                className="relative aspect-[421/610] overflow-hidden"
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

                <div className="relative flex h-full flex-col p-6 pt-14 text-[#181818]">
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
                      className="mt-[30%] flex flex-1 flex-col"
                    >
                      <p className="text-sm font-medium">{active.n}</p>
                      <h3 className="mt-2 text-3xl font-bold leading-tight">
                        {active.title}
                      </h3>
                      <p className="mt-auto text-base font-medium">
                        {active.body}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* stickers — outside the clipped card so they overflow */}
            <img
              src={asset(active.sticker)}
              alt=""
              className="absolute -left-8 top-[30%] z-20 w-36 -rotate-6"
            />
            <img
              src={asset(active.sticker)}
              alt=""
              className="absolute -right-10 top-[52%] z-20 w-36 rotate-6"
            />

            {/* preload stickers to avoid a flash on slide change */}
            <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
              {STEPS.map((s) => (
                <img key={s.sticker} src={asset(s.sticker)} alt="" />
              ))}
            </div>
          </div>

          <div className="hidden w-36 shrink-0 pt-8 lg:block">
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
