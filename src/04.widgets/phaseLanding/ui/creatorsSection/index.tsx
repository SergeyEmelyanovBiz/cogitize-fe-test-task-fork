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
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-40">
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

          {/* Duo photo + "Just you and your audience" */}
          <motion.img
            {...reveal}
            src={asset("photo-duo.png")}
            alt=""
            className="absolute right-0 top-[26%] z-10 w-40 rounded-md border-[6px] border-white shadow-xl sm:w-52"
          />
          <motion.img
            {...reveal}
            src={asset("just-you-audience.svg")}
            alt="Just you and your audience"
            className="absolute right-2 top-[58%] z-10 w-36 sm:w-44"
          />

          {/* Purple heart */}
          <motion.img
            {...reveal}
            src={asset("heart.svg")}
            alt=""
            className="absolute bottom-[8%] right-[24%] z-10 w-7"
          />
        </div>

        {/* Fairy photo with yellow smiley + "Action not just words" */}
        <motion.div {...reveal} className="relative mt-10 w-44 sm:w-52">
          <img
            src={asset("photo-fairy.png")}
            alt=""
            className="w-full rounded-md border-[6px] border-white shadow-xl"
          />
          <img
            src={asset("smiley-yellow.svg")}
            alt=""
            className="absolute -right-4 -top-4 w-12"
          />
          <img
            src={asset("action-words.svg")}
            alt="Action not just words"
            className="absolute -bottom-8 left-1 w-36"
          />
        </motion.div>
      </div>

      {/* Dark "tribe" block — two portraits */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative min-h-[420px]">
          <img
            src={asset("photo-smoke.png")}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <motion.div
            {...reveal}
            className="absolute bottom-8 left-8 max-w-xs text-white"
          >
            <span className="relative inline-block px-1 text-2xl font-bold text-[#181818]">
              <img
                src={asset("underline-1.svg")}
                alt=""
                className="absolute inset-x-0 -bottom-1 -z-10 h-full w-full"
              />
              Just you and your tribe
            </span>
            <br />
            <span className="relative mt-1 inline-block px-1 text-2xl font-bold text-[#181818]">
              <img
                src={asset("underline-2.svg")}
                alt=""
                className="absolute inset-x-0 -bottom-1 -z-10 h-full w-full"
              />
              Zero algorithm noise.
            </span>
            <p className="mt-4 text-base font-medium leading-relaxed text-white/90">
              Only your raw concepts, your curated drops, and the community that
              stands by your side
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[420px]">
          <img
            src={asset("photo-orange.png")}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
