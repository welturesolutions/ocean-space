"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@heroui/react";
import PrivacySection from "./privacy-section";
import PrivacySectionBM from "./privacy-section-bm";
import Link from "next/link";
import PrivacyScrollLink from "./privacy-scroll-link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const CustomArrowImage = ({ isOpen }) => (
  <Image
    src="/privacy-policy/privacy-arrow.svg"
    alt="Privacy Icon"
    width={13}
    height={13}
    className={`transition-transform duration-300 ${
      isOpen ? "rotate-90" : "rotate-0"
    }`}
  />
);

export default function PrivacyDetail() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["1"]));
  const pinStickyRef = useRef(null);

  useEffect(() => {
    // Handle accordion state based on screen size
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleMediaChange = (e) => {
      setSelectedKeys(e.matches ? new Set(["1"]) : new Set());
    };

    // Initial check
    handleMediaChange(mediaQuery);

    // Add listener for changes
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Apply pinning for screens >= 1280px with different end points
    if (pinStickyRef.current) {
      ScrollTrigger.matchMedia({
        // Screens >= 1600px
        "(min-width: 1600px)": function () {
          ScrollTrigger.create({
            trigger: pinStickyRef.current,
            start: "top 150px",
            end: "bottom center",
            pin: true,
            pinSpacing: false,
          });
        },
        // Screens between 1280px and 1599px
        "(min-width: 1280px) and (max-width: 1599px)": function () {
          ScrollTrigger.create({
            trigger: pinStickyRef.current,
            start: "top 100px",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
          });
        },
      });
    }

    // Smooth scroll for all Back to Top links using utility function
    const backToTopLinks = document.querySelectorAll(".back-to-top");
    const handleBackToTop = (e) => {
      e.preventDefault();
      const element = document.querySelector(".back-here");
      if (element) {
        // Import the utility function dynamically to avoid SSR issues
        import("../../../lib/scroll-utils").then(({ smoothScrollTo }) => {
          smoothScrollTo(element, {
            offset: -100, // Account for header height
            duration: 1.2,
            easing: (t) => t,
          });
        });
      }
    };
    backToTopLinks.forEach((link) => {
      link.addEventListener("click", handleBackToTop);
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      backToTopLinks.forEach((link) => {
        link.removeEventListener("click", handleBackToTop);
      });
    };
  }, []);

  const accordionItems = [
    {
      title: "Privacy Policy",
      content: (
        <ul className="pl-[50px] underline underline-offset-2 space-y-[5px]">
          <li>
            <PrivacyScrollLink
              id="en-a"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Personal Data that we collect and how we collect it
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-b"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Your Consent
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-c"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Purpose of the collected information
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-d"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Use and Disclosure of Personal Data
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-e"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Storage and Retention of Personal Data
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-f"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Security Measures
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-g"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Data Subject Rights
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-h"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Confidentiality
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-i"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Third Party Websites
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-j"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Your acceptance of these terms
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-k"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Changes to this policy
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-l"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Disclaimer
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-m"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Language
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="en-n"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Contact
            </PrivacyScrollLink>
          </li>
        </ul>
      ),
      key: "1",
    },
    {
      title: "Dasar Privasi",
      content: (
        <ul className="pl-[50px] underline underline-offset-2 space-y-[5px]">
          <li>
            <PrivacyScrollLink
              id="bm-a"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Data Peribadi yang kami kumpulkan dan cara kami mengumpulnya
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-b"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Persetujuan Anda
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-c"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Tujuan maklumat yang dikumpul
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-d"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Penggunaan dan Pendedahan Data Peribadi
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-e"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Penyimpanan dan Pengekalan Data Peribadi Anda
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-f"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Langkah Keselamatan
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-g"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Hak Subjek Data
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-h"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Kerahsiaan
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-i"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Laman Web Pihak Ketiga
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-j"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Penerimaan anda terhadap syarat ini
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-k"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Perubahan kepada dasar ini
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-l"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Penafian
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-m"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Bahasa
            </PrivacyScrollLink>
          </li>
          <li>
            <PrivacyScrollLink
              id="bm-n"
              className="text-[#002991] hover:text-[#001a66] transition-colors duration-200"
            >
              Hubungi
            </PrivacyScrollLink>
          </li>
        </ul>
      ),
      key: "2",
    },
  ];

  return (
    <div className="bg-white rounded-t-[40px] -mt-[3em] relative z-10">
      <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] pt-[5em] xl:pt-[10em] xl:grid grid-cols-[25%_auto] gap-[50px] back-here">
        <div className="pin-sticky" ref={pinStickyRef}>
          <h5 className="mb-[20px] font-bold text-[#002991] plexSans">
            Table of contents
          </h5>
          <ul className="!list-decimal">
            <Accordion
              className="core-value-row privacy-sections border-b-1 border-b-[#D9D9D9] pb-[10px]"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.key}
                  title={
                    <div className="flex flex-row-reverse justify-end gap-[30px] items-center cursor-pointer text-left underline underline-offset-2 text-[#555E6E] text-[18px]">
                      <li>
                        <span className="faq-title lg:w-full text-[#555E6E] font-[400]">
                          {item.title}
                        </span>
                      </li>
                      <CustomArrowImage isOpen={selectedKeys.has(item.key)} />
                    </div>
                  }
                  textValue={item.title}
                  icon={null}
                  className="mb-[20px] relative z-10"
                  classNames={{ content: "pb-0" }}
                  titleClassName="font-bold p-4"
                  contentClassName="p-4 text-black"
                >
                  {item.content}
                </AccordionItem>
              ))}
            </Accordion>
          </ul>
          <Link
            href="/"
            className="back-to-top font-bold gap-[10px] items-center pt-[30px] hidden xl:flex"
          >
            Back To Top{" "}
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99986 3.82843V16H6.99986V3.82843L1.6359 9.1924L0.22168 7.7782L7.99986 0L15.7781 7.7782L14.3639 9.1924L8.99986 3.82843Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-[50px] xl:mt-0">
          <PrivacySection />
          <h3 className="!leading-none pt-[48px] xl:pt-[80px] mb-[30px] text-[#002991] font-bold">
            Dasar Privasi
          </h3>
          <PrivacySectionBM />
          <Link
            href="/"
            className="back-to-top font-bold flex gap-[10px] items-center xl:pt-[30px] pb-[5em] xl:pb-[10em]"
          >
            Back To Top{" "}
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99986 3.82843V16H6.99986V3.82843L1.6359 9.1924L0.22168 7.7782L7.99986 0L15.7781 7.7782L14.3639 9.1924L8.99986 3.82843Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
