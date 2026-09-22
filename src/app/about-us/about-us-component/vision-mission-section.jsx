"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <>
      <div className="mx-auto xl:max-w-[1400px] px-[1rem] md:px-[2.5rem] 2xl:px-0 py-[5em] md:py-[8em] xl:py-[10em]">
        <div className="grid xl:grid-cols-2 gap-[2em] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="bg-white rounded-[35px] vision-mission-shadow py-[2em] md:py-[3em] px-[2em] md:px-[3em]"
          >
            <Image
              className="w-[60px] h-[60px] p-[10px] bg-[#D9FFFD] rounded-[15px] mb-[20px]"
              src="/about-us/vision-icon.svg"
              alt="visionIcon"
              width={100}
              height={100}
            />
            <h4 className="font-[600] mb-[15px]">Vision</h4>
            <p className="!text-[18px] text-[#555E6E]">
              Leading IT and BPO with secure, scalable, and innovative
              solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="bg-white rounded-[35px] vision-mission-shadow py-[2em] md:py-[3em] px-[2em] md:px-[3em]"
          >
            <Image
              className="w-[60px] h-[60px] p-[10px] bg-[#D9FFFD] rounded-[15px] mb-[20px]"
              src="/about-us/mission-icon.svg"
              alt="missionIcon"
              width={100}
              height={100}
            />
            <h4 className="font-[600] mb-[15px]">Mission</h4>
            <p className="!text-[18px] text-[#555E6E]">
              Empowering businesses with seamless IT and outsourcing for
              efficiency, security and scalable growth.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="">
        <Image
          className="w-full h-[20em] md:h-[30em] xl:h-[40em] 2xl:h-[60em] object-cover object-center"
          src="/about-us/vision-mission-bg.jpg"
          alt="visionMissionBg"
          width={2000}
          height={2000}
          unoptimized
        />
      </div>
    </>
  );
}
