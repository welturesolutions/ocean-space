import TermsConditionsBanner from "./terms-conditions-component/terms-conditions-banner";
import TermsConditionsDetail from "./terms-conditions-component/terms-conditions-detail";
import HashScrollEffect from "../global/hash-scroll-effect";

export const metadata = {
  title: "Ocean Space - Terms & Conditions",
  description:
    "Please read these terms and conditions carefully before using Our Service.",
};

export default function TermsConditions() {
  return (
    <>
      <HashScrollEffect />
      <div className="">
        <TermsConditionsBanner />
        <TermsConditionsDetail />
      </div>
    </>
  );
}
