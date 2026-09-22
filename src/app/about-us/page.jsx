import AboutUsBanner from "./about-us-component/about-us-banner";
import AboutSection from "./about-us-component/about-section";
import VisionMissionSection from "./about-us-component/vision-mission-section";
import MotivationsSection from "./about-us-component/motivations-section";
import FaqSection from "./about-us-component/faq-section";

export const metadata = {
  title: "Meet Ocean Space - Your Partner in Scalable BPO & IT Solutions",
  description:
    "Discover how Ocean Space drives sustainable growth with secure, scalable BPO and IT services. We empower businesses to focus on what matters most—growth and innovation.",
};

export default function AboutUs() {
  return (
    <>
      <div>
        <AboutUsBanner />
        <AboutSection />
        <VisionMissionSection />
        <MotivationsSection />
        <FaqSection />
      </div>
    </>
  );
}
