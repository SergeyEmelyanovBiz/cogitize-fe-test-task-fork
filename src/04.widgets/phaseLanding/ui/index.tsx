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
    <div className={`${geist.className} bg-[#FEFEFE] text-[#181818]`}>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <PhaseHeader onOpenMenu={() => setMenuOpen(true)} />
      <HeroSection />
      <CreatorsSection />
      <StepsSection />
      <BenefitsSection />
    </div>
  );
};
