"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CareerJourney() {
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll();

  const oddRowFloatAnimation = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "0%"]
  );
  const evenRowFloatAnimation = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "10em"]
  );

  return (
    <>
      <div className="mx-auto xl:max-w-[1400px] px-[1rem] md:px-[2.5rem] 2xl:px-0 pb-[5em] md:pb-[4em] xl:pb-[8em]">
        <div className="sm:hidden flex justify-center pb-[40px]">
          <Image
            src="/career/career-colleague-fun.jpg"
            alt="careerColleagueFun"
            width={1000}
            height={1000}
            className="w-full h-[300px] rounded-[30px] object-cover"
          />
        </div>
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="uppercase text-[#002991] mb-[1em] font-[600] plexSans"
          >
            Life at ocean space
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="text-[#0A0D14] font-[600] m-auto mb-[25px] capitalize"
          >
            Empowering Your <br /> Career Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="xl:w-[50%] 2xl:w-[45%] m-auto !text-[#555E6E] mb-[40px]"
          >
            At Ocean Space, we're shaping the future of work—building tools
            <br className="hidden md:block" /> that empower careers and
            transform how teams grow and thrive.{" "}
            <br className="hidden md:block" /> Join us to make a lasting impact.
          </motion.p>
          <div className="flex flex-row gap-[10px] justify-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: true }}
                className="flex flex-row w-max"
              >
                <Image
                  src="/career/avatar-1.jpg"
                  alt="careerAvatarGroup"
                  width={100}
                  height={100}
                  className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white"
                />
                <Image
                  src="/career/avatar-2.jpg"
                  alt="careerAvatarGroup"
                  width={100}
                  height={100}
                  className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white -ml-2.5"
                />
                <Image
                  src="/career/avatar-3.jpg"
                  alt="careerAvatarGroup"
                  width={100}
                  height={100}
                  className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white -ml-2.5"
                />
                <Image
                  src="/career/avatar-4.jpg"
                  alt="careerAvatarGroup"
                  width={100}
                  height={100}
                  className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white -ml-2.5"
                />
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center -ml-2.5 overflow-hidden">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#F6F8FA] flex items-center justify-center text-[#0A0D14] font-[600] text-[12px] relative overflow-hidden">
                    <span>+8</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isHovered ? "8" : "7"}
                        initial={{ y: isHovered ? 20 : -20, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: isHovered ? 20 : -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isHovered ? "8" : "7"}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
            <Link href="/career/career-listing">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`flex items-center gap-[5px] ${
                  isHovered ? "bg-[#60CDFF]" : "bg-[#002991]"
                } ${
                  isHovered ? "text-[#002991]" : "text-[#FFFFFF]"
                } py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow w-max font-[700] text-[16px]`}
              >
                Join Our Team
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
                >
                  <path
                    d="M13.1724 12.0007L8.22266 7.05093L9.63688 5.63672L16.0008 12.0007L9.63688 18.3646L8.22266 16.9504L13.1724 12.0007Z"
                    fill={isHovered ? "#002991" : "#FFFFFF"}
                  />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-hidden hidden sm:block pb-[17em] xl:pb-[17em] 2xl:pb-[22em] 2xl:px-0">
        <div className="grid sm:grid-cols-[33%_33%_33%] lg:grid-cols-[20%_20%_20%_20%_20%] gap-[2em] relative w-full max-w-[1600px] mx-auto 2xl:max-w-full career-image-effect sm:-ml-[2em] lg:-ml-[4em] 2xl:-ml-[6em]">
          <motion.div
            style={{ y: oddRowFloatAnimation }}
            className="hidden lg:block overflow-visible"
          >
            <Image
              src="/career/career-woman.jpg"
              alt="careerWomanHalf"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover"
            />
            <Image
              src="/career/career-colleague-eating.jpg"
              alt="careerColleagueEating"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover mt-[2em]"
            />
          </motion.div>

          <motion.div
            style={{ y: evenRowFloatAnimation }}
            className="overflow-visible"
          >
            <Image
              src="/career/career-colleague-fun.jpg"
              alt="careerColleagueFun"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover"
            />
            <Image
              src="/career/career-high-angle-woman.jpg"
              alt="careerHighAngleWoman"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover mt-[2em]"
            />
          </motion.div>

          <motion.div
            style={{ y: oddRowFloatAnimation }}
            className="overflow-visible"
          >
            <Image
              src="/career/career-working-together.jpg"
              alt="careerWorkingTogether"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover"
            />
            <Image
              src="/career/career-walking-together.jpg"
              alt="careerWalkingTogether"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover mt-[2em]"
            />
          </motion.div>

          <motion.div
            style={{ y: evenRowFloatAnimation }}
            className="overflow-visible"
          >
            <Image
              src="/career/career-stylish-woman.jpg"
              alt="careerStylishWoman"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover"
            />
            <Image
              src="/career/career-pool-table.jpg"
              alt="careerPoolTable"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover mt-[2em]"
            />
          </motion.div>

          <motion.div
            style={{ y: oddRowFloatAnimation }}
            className="overflow-visible hidden lg:block"
          >
            <Image
              src="/career/career-analyzing.jpg"
              alt="careerAnalyzing"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover"
            />
            <Image
              src="/career/career-man-phone.jpg"
              alt="careerManPhone"
              width={1000}
              height={1000}
              className="w-full h-full rounded-[65px] object-cover mt-[2em]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
