import { Geist } from "next/font/google";
import { HeroSection } from "./heroSection";
import { PhaseHeader } from "./phaseHeader";

const geist = Geist({ subsets: ["latin"] });

export const PhaseLanding = () => {
  return (
    <div className={`${geist.className} bg-[#FEFEFE] text-[#181818]`}>
      <PhaseHeader />
      <HeroSection />
    </div>
  );
};
