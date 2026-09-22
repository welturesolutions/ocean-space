"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

const CustomArrowImage = ({ isOpen }) => (
  <Image
    src="/about-us/faq-arrow.svg"
    alt="FaqIcon"
    width={13}
    height={13}
    className={`transition-transform duration-300 ${
      isOpen ? "rotate-0" : "rotate-[-90deg]"
    }`}
  />
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null); // null means all closed

  const accordionItems = [
    {
      title: "How do I get started with Ocean Space?",
      content: (
        <>
          Getting started is easy! Simply reach out to us via phone, email, or
          our website contact form. One of our representatives will schedule a
          consultation to understand your needs and propose a tailored solution.
          Once agreed upon, we'll begin the onboarding process promptly.
        </>
      ),
    },
    {
      title: "How secure is my data when working with Ocean Space?",
      content: (
        <>
          Data security is a top priority for us. We implement industry-leading
          protocols, including encryption, access controls, and regular audits,
          to safeguard your information. Additionally, we comply with relevant
          regulations (e.g., GDPR, HIPAA) to ensure your data remains protected.
        </>
      ),
    },
    {
      title: "Are there any hidden fees associated with Ocean Space services?",
      content:
        "No, transparency is a cornerstone of our business model. Before starting any project, we provide a clear breakdown of costs, so you know exactly what to expect. There are no hidden fees or surprises along the way.",
    },
    {
      title: "How quickly can Ocean Space onboard new clients?",
      content:
        "The onboarding timeline depends on the scope of services required. However, we pride ourselves on being agile and responsive. For most projects, we can begin onboarding within days of signing an agreement, ensuring minimal disruption to your operations.",
    },
    {
      title:
        "Does Ocean Space provide scalable solutions for growing businesses?",
      content:
        "Absolutely. One of our key strengths is scalability. As your business grows, we adjust our services to match your evolving demands. Whether it's expanding IT infrastructure or increasing BPO capacity, we ensure seamless transitions without disrupting your operations.",
    },
    {
      title:
        "Is Ocean Space suitable for small businesses or only large enterprises?",
      content:
        "We cater to businesses of all sizes! Whether you're a startup looking for cost-effective solutions or an enterprise seeking scalable support, our flexible services are designed to adapt to your needs. We ensure every solution is tailored to fit your budget and long-term objectives.",
    },
    {
      title: "What is the hiring process like at Ocean Space?",
      content: (
        <>
          Our hiring process typically involves the following steps:
          <ul className="list-decimal pl-[20px] my-[10px]">
            <li>
              Application Submission: Submit your resume and any additional
              required documents.
            </li>
            <li>
              Initial Screening: Our HR team reviews applications and conducts a
              brief phone or video call to assess qualifications.
            </li>
            <li>
              Interviews: Depending on the role, there may be one or more rounds
              of interviews with hiring managers and team members.
            </li>
            <li>
              Skills Assessment (if applicable): For technical roles, we may
              conduct tests or assignments to evaluate your skills.
            </li>
            <li>
              Final Offer: Successful candidates receive a formal offer letter
              outlining terms and conditions
            </li>
          </ul>
          The entire process is transparent, professional, and respectful of
          your time.
        </>
      ),
    },
    {
      title: "Does Ocean Space provide training and development opportunities?",
      content: (
        <>
          Absolutely! At Ocean Space, we invest in our employees' growth. We
          offer:
          <ul className="list-disc pl-[20px] my-[10px]">
            <li>Onboarding Programs</li>
            <li>Skill Development Workshops</li>
            <li>Mentorship Programs</li>
            <li>Tuition Reimbursement</li>
          </ul>
          We encourage continuous learning and provide resources to help you
          advance your career.
        </>
      ),
    },
  ];

  const handleToggle = (index) => {
    try {
      setOpenIndex(openIndex === index ? null : index);
    } catch (error) {
      console.error("Error in handleToggle:", error);
      setOpenIndex(null); // Fallback to all closed
    }
  };

  return (
    <div className="about-faq-section relative overflow-hidden">
      <div className="mx-auto xl:max-w-[1400px] px-[1rem] md:px-[2.5rem] 2xl:px-0 py-[5em] md:py-[8em] xl:py-[10em]">
        {/* <div className="blur-light-blue-bg absolute"></div> */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
          className="text-white text-center font-[600] mb-[35px]"
        >
          Frequently Asked Questions
        </motion.h2>
        <div>
          <Accordion className="core-value-row" selectionMode="single">
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={
                  <div
                    className="flex justify-between items-center cursor-pointer text-left text-white"
                    onClick={() => handleToggle(index)}
                  >
                    <span className="w-[90%] md:w-[80%] faq-title lg:w-full text-[18px] py-[25px] leading-[1.3] xl:leading-none">
                      {item.title}
                    </span>
                    <CustomArrowImage isOpen={openIndex === index} />
                  </div>
                }
                classNames={{ content: "py-0" }}
                textValue={item.title}
                icon={null}
                className="w-full border-b-[1px] border-b-[#FFFFFF4D] "
                isOpen={openIndex === index}
              >
                <div className="text-[18px] text-white mb-[25px]">
                  {item.content}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
