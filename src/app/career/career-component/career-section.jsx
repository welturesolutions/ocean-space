"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Accordion, AccordionItem, Progress } from "@heroui/react";

const keys = [
  "careerGrowthOpportunity",
  "collaborativeCulture",
  "excitingProjects",
  "employeeWellBeingProgram",
];

export default function CareerSection() {
  const [selectedKeys, setSelectedKeys] = useState([keys[0]]);
  const [value, setValue] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const accordionRef = useRef(null);
  const accordionInView = useInView(accordionRef, { once: false });

  useEffect(() => {
    setIsInView(accordionInView);
  }, [accordionInView]);

  const accordionTitle = (title) => {
    return (
      <motion.h3
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8 },
        }}
        className="font-[600] mb-[15px] mt-[15px] max-sm:text-left cursor-pointer hover:text-[#0a0d14]"
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
    );
  };

  useEffect(() => {
    if (!isInView) return setValue(0);
    const interval = setInterval(() => {
      setValue((v) => {
        if (v >= 100) {
          //   clearInterval(interval);

          setTimeout(() => {
            const currentKey =
              selectedKeys[0] !== undefined
                ? selectedKeys[0]
                : selectedKeys?.currentKey;

            const currentIndex = keys.indexOf(currentKey);

            const nextIndex = (currentIndex + 1) % keys.length;

            setSelectedKeys([keys[nextIndex]]);
            setValue(0);
          }, 500);

          return 100;
        }
        return v + 1;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [isInView, selectedKeys]);

  useEffect(() => {
    if (selectedKeys?.currentKey) {
      setValue(0);
    }
  }, [selectedKeys?.currentKey]);

  const accordionItemComponent = (key, title, content) => {
    const activeAccordionItemColor = Array.isArray(selectedKeys)
      ? selectedKeys.includes(key)
        ? "text-[#0A0D14]"
        : "text-[#0A0D1480]"
      : selectedKeys.currentKey === key
      ? "text-[#0A0D14]"
      : "text-[#0A0D1480]";

    return (
      <AccordionItem
        key={key}
        title={accordionTitle(title)}
        hideIndicator
        textValue={key}
        className="pb-[20px] last:pb-0"
        classNames={{
          title: activeAccordionItemColor,
          base: "md:w-full xl:max-w-xl",
          content: "text-[#555E6E] py-0",
        }}
      >
        {content}
        <Progress
          aria-label="Progress"
          size="lg"
          className="mt-5"
          classNames={{
            base: "md:w-full xl:max-w-xl",
            track: "h-[5px] border-none bg-[#E8E8E8] rounded-none",
            indicator: "bg-gradient-to-r from-[#2B67FF] to-[#60CDFF]",
          }}
          value={value}
        />
      </AccordionItem>
    );
  };

  const careerGrowthOpportunityContent = (
    <>
      We don't just hire you—we invest in you. Mentorship, tailored upskilling,
      and a clear path to advancement ensure you're always moving forward.
      Because when you grow, we all do.
    </>
  );

  const collaborativeCultureContent = (
    <>
      Here, your voice isn't just heard-it matters. We innovate best when we
      collaborate openly, celebrate diverse ideas, and lift each other up. This
      isn't just culture; it's how we thrive
    </>
  );

  const excitingProjectsContent = (
    <>
      Your skills will shape what's next. From cutting-edge tech to real-world
      impact, we tackle projects that challenge and inspire. This isn't just a
      job-its a change to leave your mark
    </>
  );

  const employeeWellBeingProgramContent = (
    <>
      We care for the whole you. Flexible work, mental health support, and
      wellness initiatives aren't perks-they're promises. Your well-being is the
      foundation of everything we do.
    </>
  );

  const accordionImageChanger = (arr) => {
    const isCareerGrowthOpportunity = Array.isArray(arr)
      ? arr.includes("careerGrowthOpportunity")
      : arr?.currentKey === "careerGrowthOpportunity";

    const isCollaborativeCulture = Array.isArray(arr)
      ? arr.includes("collaborativeCulture")
      : arr?.currentKey === "collaborativeCulture";

    const isExcitingProjects = Array.isArray(arr)
      ? arr.includes("excitingProjects")
      : arr?.currentKey === "excitingProjects";

    const isEmployeeWellBeingProgram = Array.isArray(arr)
      ? arr.includes("employeeWellBeingProgram")
      : arr?.currentKey === "employeeWellBeingProgram";

    if (isCareerGrowthOpportunity) {
      return "/career/career-looking-img.jpg";
    } else if (isCollaborativeCulture) {
      return "/career/career-workers-chatting.jpg";
    } else if (isExcitingProjects) {
      return "/career/career-applauding-colleague.jpg";
    } else if (isEmployeeWellBeingProgram) {
      return "/career/career-reformer-class.jpg";
    } else {
      return "/career/career-looking-img.jpg";
    }
  };

  return (
    <>
      <div className="bg-[#F6F8FA] rounded-t-[40px] -mt-[3em]">
        <div className="flex flex-col-reverse xl:grid grid-cols-2 mx-auto xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] py-[5em] md:py-[8em] xl:py-[10em] gap-[5em] overflow-hidden">
          <div className="w-full h-auto content-center">
            <motion.div
              ref={accordionRef}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-[15px]"
            >
              <div>
                <h5 className="career-btn-shadow flex items-center gap-[5px] bg-[#FFFFFF] text-[#002991] py-[12px] pl-[25px] pr-[20px] rounded-[99px] !text-[14px] w-max font-bold border border-[#D8D8D8]">
                  WHAT TO EXPECT
                </h5>
              </div>

              <div>
                <Accordion
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}
                  disallowEmptySelection={true}
                  showDivider={false}
                >
                  {accordionItemComponent(
                    "careerGrowthOpportunity",
                    "Career Growth Opportunities",
                    careerGrowthOpportunityContent
                  )}
                  {accordionItemComponent(
                    "collaborativeCulture",
                    "Collaborative Culture",
                    collaborativeCultureContent
                  )}
                  {accordionItemComponent(
                    "excitingProjects",
                    "Exciting Projects",
                    excitingProjectsContent
                  )}
                  {accordionItemComponent(
                    "employeeWellBeingProgram",
                    "Employee Well-being Programs",
                    employeeWellBeingProgramContent
                  )}
                </Accordion>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Image
              src={accordionImageChanger(selectedKeys)}
              alt="careerLookingImg"
              width={1000}
              height={1000}
              className="h-[20em] md:h-[30em] w-full rounded-[60px] object-cover object-top xl:h-full xl:object-center"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
