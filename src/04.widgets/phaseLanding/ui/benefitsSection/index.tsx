"use client";

import { motion } from "framer-motion";

const asset = (name: string) => `/images/phase/${name}`;

const BENEFITS = [
  {
    name: "Exhibition",
    desc: "A premium editorial layout featuring your aesthetic",
    tag: "100% your DNA",
    photo: "benefit-exhibition.png",
  },
  {
    name: "Capsules",
    desc: "Publish, modify your capsule drops instantly.",
    tag: "No messy feeds",
    photo: "benefit-capsules.png",
  },
  {
    name: "Telemetry",
    desc: "Visitors get live updates on what’s currently available.",
    tag: "No missed drops",
    photo: "benefit-telemetry.png",
  },
  {
    name: "Domain",
    desc: "A short, clean web address — phase.com/your-name.",
    tag: "Instant access",
    photo: "benefit-domain.png",
  },
  {
    name: "Impact",
    desc: "Discover what your audience interacts with most.",
    tag: "Deep audience data",
    photo: "benefit-impact.png",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="for-whom" className="bg-[#181818] text-white">
      {BENEFITS.map((b, i) => (
        <motion.div
          key={b.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative border-t border-white/10 last:border-b"
        >
          {/* background photo + gradient, revealed on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <img
              src={asset(b.photo)}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[#181818]/20 to-[#181818]" />
          </div>

          <div className="relative mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-8 px-6 py-9">
            <p className="max-w-[230px] text-sm leading-snug text-white/70">
              {b.desc}
            </p>

            <h3 className="text-center text-5xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#FFD000] sm:text-6xl">
              {b.name}
            </h3>

            <div className="flex justify-end">
              <span className="relative isolate inline-block px-3 py-1 text-sm font-medium text-white/50 transition-colors duration-300 group-hover:text-white">
                <span className="absolute inset-0 -z-10 bg-white/10 transition-opacity duration-300 group-hover:opacity-0" />
                <img
                  src={asset("benefit-tag-line.svg")}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {b.tag}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};
