import PrivacyBanner from "./privacy-policy-component/privacy-banner";
import PrivacyDetail from "./privacy-policy-component/privacy-detail";
import HashScrollEffect from "../global/hash-scroll-effect";

export const metadata = {
  title: "Ocean Space - Privacy Policy",
  description:
    "This Privacy Policy governs the manner in which Ocean Space collects, uses, maintains and discloses information collected.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <HashScrollEffect />
      <div className="">
        <PrivacyBanner />
        <PrivacyDetail />
      </div>
    </>
  );
}
