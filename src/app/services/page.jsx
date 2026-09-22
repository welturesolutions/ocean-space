import ServicesBanner from "./services-component/services-banner";
import StackITSection from "./services-component/stack-IT-section";
import ApartSection from "./services-component/apart-section";
import DrivesResultsSection from "./services-component/drives-results-section";

export const metadata = {
  title: "Meet Ocean Space - Your Partner in Scalable BPO & IT Solutions",
  description:
    "Discover how Ocean Space drives sustainable growth with secure, scalable BPO and IT services. We empower businesses to focus on what matters most—growth and innovation.",
};

export default function AboutUs() {
  return (
    <>
      <div>
        <ServicesBanner />
        <StackITSection />
        <ApartSection />
        <DrivesResultsSection />
      </div>
    </>
  );
}
