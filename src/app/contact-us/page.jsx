import ContactUsBanner from "./contact-us-component/contact-us-banner";
import ContactUsFormSection from "./contact-us-component/contact-form-section";

export const metadata = {
  title: "Connect with Ocean Space for Expert BPO & IT Solutions",
  description:
    "Let's work together! Contact Ocean Space for expert BPO and IT services. We're here to support your business goals with tailored, scalable solutions.",
};

export default function ContactUs() {
  return (
    <>
      <div>
        <ContactUsBanner />
        <ContactUsFormSection />
      </div>
    </>
  );
}
