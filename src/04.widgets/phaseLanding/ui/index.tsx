import { Geist } from "next/font/google";
import { CreatorsSection } from "./creatorsSection";
import { HeroSection } from "./heroSection";
import { PhaseHeader } from "./phaseHeader";
import { StepsSection } from "./stepsSection";

const geist = Geist({ subsets: ["latin"] });

export const PhaseLanding = () => {
  return (
    <div className={`${geist.className} bg-[#FEFEFE] text-[#181818]`}>
      <PhaseHeader />
      <HeroSection />
      <CreatorsSection />
      <StepsSection />
    </div>
  );
};
