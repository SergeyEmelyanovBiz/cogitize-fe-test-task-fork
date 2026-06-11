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
      <div className="relative z-20 mx-auto max-w-6xl px-6 pt-[100px] pb-2">
        <motion.p
          {...reveal}
          className="text-center text-base font-medium text-[#181818]"
        >
          Creators inspire millions every single day
        </motion.p>

        <div className="relative mt-8">
          <motion.h2
            {...reveal}
            className="relative z-10 text-center font-black uppercase leading-[0.9] tracking-tight text-[#050505] text-[15vw] sm:text-[clamp(2.5rem,10vw,8.5rem)]"
          >
            Phase is a space for creators to be{" "}
            <br className="sm:hidden" />
            seen
          </motion.h2>

          {/* "Our mission" purple script */}
          <motion.img
            {...reveal}
            src={asset("our-mission.svg")}
            alt="Our mission"
            className="absolute -top-6 left-2 z-20 w-36 -rotate-6 sm:left-[22%] sm:w-48"
          />

          {/* Duo polaroid with "Just you and your audience" over its bottom-right
              — hidden on mobile (not present in the mobile layout) */}
          <motion.div
            {...reveal}
            className="absolute right-[-4%] top-[10%] z-0 hidden w-52 sm:block sm:w-64"
          >
            <div className="bg-white pb-6 shadow-xl">
              <img src={asset("photo-duo.png")} alt="" className="w-full" />
            </div>
            <img
              src={asset("just-you-audience.svg")}
              alt="Just you and your audience"
              className="absolute -bottom-8 -right-20 w-40 sm:w-48"
            />
          </motion.div>

          {/* Purple heart */}
          <motion.img
            {...reveal}
            src={asset("heart.svg")}
            alt=""
            className="absolute bottom-[4%] right-[22%] z-20 w-8 sm:right-[14%]"
          />
        </div>
      </div>

      {/* Dark "tribe" block — two portraits, with the curved gray divider */}
      <div className="relative">
        {/* Fairy polaroid overlapping the boundary into the dark block */}
        <motion.div
          {...reveal}
          className="relative z-30 mx-auto -mb-20 mt-8 w-52 -rotate-2 sm:absolute sm:left-[95px] sm:-top-24 sm:mx-0 sm:mb-0 sm:mt-0 sm:w-60"
        >
          <div className="bg-white p-2 shadow-xl">
            <img src={asset("photo-fairy.png")} alt="" className="w-full" />
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

        {/* photos + curved gray divider anchored to their top */}
        <div className="relative">
          <img
            src={asset("section2-curve.svg")}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 z-10 w-full -translate-y-[88%] select-none"
          />

          <div className="grid grid-cols-2">
            <div className="relative min-h-[460px]">
              <img
                src={asset("photo-smoke.png")}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
            />
            <motion.div
              {...reveal}
              className="absolute bottom-10 left-4 z-10 max-w-xs text-[#181818] sm:left-20"
            >
              <span className="relative isolate inline-block px-2 py-0.5 text-base font-medium">
                <img
                  src={asset("underline-1.svg")}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full"
                />
                Just you and your tribe
              </span>
              <br />
              <span className="relative isolate mt-2 inline-block px-2 py-0.5 text-base font-medium">
                <img
                  src={asset("underline-2.svg")}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full"
                />
                Zero algorithm noise.
              </span>
              <p className="mt-4 text-xl font-medium leading-6 text-[#FEFEFE]">
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
      </div>
    </section>
  );
};
