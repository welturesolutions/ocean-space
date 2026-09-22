import HomeBanner from "./home-component/home-banner";
import TrustedSection from "./home-component/trusted-section";
import HandleTechSection from "./home-component/handle-tech-section";
import SolutionSection from "./home-component/solution-section";
import LookingJobSection from "./home-component/looking-job-section";
import IndustriesSection from "./home-component/industries-section";
import MobileSolutionSection from "./home-component/mobile-solution-section";
import SvgMaskSection from "./home-component/svg-mask-section";
import { CountryDropdown } from "./home-component/enhanced-section";

export const metadata = {
  title:
    "Ocean Space Delivers Top BPO & IT Services to Streamline Operations & Scale Smarter",
  description:
    "Unlock efficiency and growth with Ocean Space. We deliver tailored BPO and IT solutions to streamline operations, reduce costs, and support your business success.",
};

export default function Home() {
  return (
    <>
      <div>
        <HomeBanner />
        <TrustedSection />
        <HandleTechSection />
        <div className="hidden xl:block">
          <SolutionSection />
        </div>
        <div className="xl:hidden">
          <MobileSolutionSection />
        </div>
        <LookingJobSection />
        <IndustriesSection />
        {/*
        <SvgMaskSection />
        <div className="h-full pb-[10em] flex justify-center">
          <CountryDropdown defaultValue="USA" />
        </div> */}
      </div>
    </>
  );
}
