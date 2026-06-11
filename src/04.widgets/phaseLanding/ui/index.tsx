"use client";

import { Geist } from "next/font/google";
import { useState } from "react";
import { BenefitsSection } from "./benefitsSection";
import { CreatorsSection } from "./creatorsSection";
import { HeroSection } from "./heroSection";
import { MobileMenu } from "./mobileMenu";
import { PhaseHeader } from "./phaseHeader";
import { StepsSection } from "./stepsSection";

const geist = Geist({ subsets: ["latin"] });

export const PhaseLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${geist.className} relative overflow-x-hidden bg-[#FEFEFE] text-[#181818]`}
    >
      {/* off-canvas menu sits on the right, revealed as the content slides away */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div
        className="relative z-10 min-h-screen bg-[#FEFEFE] transition-transform duration-300 ease-out"
        style={{ transform: menuOpen ? "translateX(-78%)" : "translateX(0)" }}
      >
        {/* tap the pushed-aside content to close the menu */}
        {menuOpen && (
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 z-[60] cursor-pointer"
          />
        )}

        <PhaseHeader onOpenMenu={() => setMenuOpen(true)} />
        <HeroSection />
        <CreatorsSection />
        <StepsSection />
        <BenefitsSection />
      </div>
    </div>
  );
};
