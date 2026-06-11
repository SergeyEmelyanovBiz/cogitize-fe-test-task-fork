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
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="group relative border-t border-white/10 last:border-b"
        >
          <div className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-100">
            <img
              src={asset(b.photo)}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover ${
                i === 1 ? "object-[center_30%]" : "object-center"
              }`}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #181818 0%, transparent 170%)",
              }}
            />
            <div className="absolute inset-0 bg-black/40 sm:hidden" />
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-12 text-center sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-8 sm:py-9 sm:text-left">
            <h3 className="order-1 text-4xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#FFD000] sm:order-2 sm:text-center sm:text-5xl lg:text-6xl">
              {b.name}
            </h3>

            <p className="order-2 max-w-[268px] text-base font-medium leading-snug text-[#F4F4F4] sm:order-1 sm:text-xl sm:leading-6">
              {b.desc}
            </p>

            <div className="order-3 flex justify-center sm:order-3 sm:justify-end">
              <span className="relative isolate inline-block px-3 py-1 text-sm font-medium text-white transition-colors duration-300 sm:text-white/50 sm:group-hover:text-white">
                <span className="absolute inset-0 -z-10 bg-white/10 opacity-0 transition-opacity duration-300 sm:opacity-100 sm:group-hover:opacity-0" />
                <img
                  src={asset("benefit-tag-line.svg")}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100"
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
