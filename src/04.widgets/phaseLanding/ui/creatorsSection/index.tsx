"use client";

import { motion } from "framer-motion";

const asset = (name: string) => `/images/phase/${name}`;

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

export const CreatorsSection = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#EFEEED]">
      {/* Editorial heading block */}
      <div className="relative z-20 mx-auto max-w-6xl px-6 pt-16 pb-40">
        <motion.p
          {...reveal}
          className="text-center text-base font-medium text-[#181818]"
        >
          Creators inspire millions every single day
        </motion.p>

        <div className="relative mt-8">
          <motion.h2
            {...reveal}
            className="text-center font-black uppercase leading-[0.9] tracking-tight text-[#050505] text-[clamp(2.5rem,10vw,8.5rem)]"
          >
            Phase is a space for creators to be seen
          </motion.h2>

          {/* "Our mission" purple script */}
          <motion.img
            {...reveal}
            src={asset("our-mission.svg")}
            alt="Our mission"
            className="absolute -top-3 left-[16%] z-10 w-40 -rotate-6 sm:w-48"
          />

          {/* Duo photo with "Just you and your audience" over its bottom-right */}
          <motion.div
            {...reveal}
            className="absolute right-[-5%] top-[30%] z-10 w-52 sm:w-64"
          >
            <img
              src={asset("photo-duo.png")}
              alt=""
              className="w-full shadow-xl"
            />
            <img
              src={asset("just-you-audience.svg")}
              alt="Just you and your audience"
              className="absolute -bottom-12 right-0 w-40 sm:w-48"
            />
          </motion.div>

          {/* Purple heart */}
          <motion.img
            {...reveal}
            src={asset("heart.svg")}
            alt=""
            className="absolute bottom-[4%] right-[14%] z-10 w-8"
          />
        </div>

        {/* Fairy polaroid card with yellow smiley + "Action not just words" */}
        <motion.div {...reveal} className="relative mt-12 w-52 -rotate-2 sm:w-60">
          <div className="bg-white p-2 shadow-xl">
            <img
              src={asset("photo-fairy.png")}
              alt=""
              className="w-full"
            />
            <div className="relative h-16">
              <img
                src={asset("action-words.svg")}
                alt="Action not just words"
                className="absolute left-1 top-2 w-40"
              />
            </div>
          </div>
          <img
            src={asset("smiley-yellow.svg")}
            alt=""
            className="absolute -right-4 -top-4 w-12"
          />
        </motion.div>
      </div>

      {/* Dark "tribe" block — two portraits, with the curved gray divider */}
      <div className="relative">
        {/* curved gray bottom of the section dipping into the photos */}
        <img
          src={asset("section2-curve.svg")}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-10 w-full -translate-y-[88%] select-none"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative min-h-[460px]">
            <img
              src={asset("photo-smoke.png")}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
            />
            <motion.div
              {...reveal}
              className="absolute bottom-10 left-8 z-10 max-w-xs text-[#181818]"
            >
              <span className="relative isolate inline-block px-2 py-0.5 text-2xl font-bold">
                <img
                  src={asset("underline-1.svg")}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full"
                />
                Just you and your tribe
              </span>
              <br />
              <span className="relative isolate mt-2 inline-block px-2 py-0.5 text-2xl font-bold">
                <img
                  src={asset("underline-2.svg")}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full"
                />
                Zero algorithm noise.
              </span>
              <p className="mt-4 text-base font-medium leading-relaxed text-[#FEFEFE]">
                Only your raw concepts, your curated drops, and the community
                that stands by your side
              </p>
            </motion.div>
          </div>

          <div className="relative min-h-[460px]">
            <img
              src={asset("photo-orange.png")}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
