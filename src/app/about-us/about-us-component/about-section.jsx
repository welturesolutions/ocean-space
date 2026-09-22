"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <div className="bg-[#F6F8FA] rounded-t-[40px] -mt-[3em]">
        <div className="mx-auto xl:max-w-[1400px] px-[1rem] md:px-[2.5rem] 2xl:px-0 py-[5em] md:py-[8em] xl:py-[10em]">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            className="font-[600] mb-[25px]"
            viewport={{ once: true }}
          >
            About Ocean Space
          </motion.h2>
          <div className="grid xl:grid-cols-2 gap-[35px] xl:gap-[8em] justify-between text-[#555E6E] mb-[40px] overflow-hidden">
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="!text-[18px]"
            >
              At Ocean Space, we are committed to helping businesses thrive by
              enhancing operational efficiency and driving sustainable growth.
              As a trusted partner in Business Process Outsourcing (BPO) and IT
              support services, we provide tailored solutions that empower
              businesses of all sizes to optimize resources, streamline
              operations, and focus on their core objectives.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="!text-[18px]"
            >
              Our expertise lies in delivering flexible, high-quality
              services—from studio rentals to auxiliary support—designed to meet
              the unique needs of your business. Whether you're a startup or an
              established enterprise, we ensure that every solution is scalable,
              adaptable, and aligned with your long-term goals.
            </motion.p>
          </div>
          <div className="w-max">
            <Link href="/services">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }}
                viewport={{ once: true }}
                className="flex items-center gap-[5px] bg-[#60CDFF] hover:!opacity-[0.8] text-[#002991] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow w-max font-bold"
              >
                Our Solutions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.1724 12.0007L8.22266 7.05093L9.63688 5.63672L16.0008 12.0007L9.63688 18.3646L8.22266 16.9504L13.1724 12.0007Z"
                    fill="#002991"
                  />
                </svg>
              </motion.p>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            className="w-full h-[20em] md:h-[30em] xl:h-[40em] 2xl:h-[60em] object-cover"
            src="/about-us/about-us-bg.jpg"
            alt="aboutusBg"
            width={2000}
            height={2000}
            unoptimized
          />
        </div>
      </div>
    </>
  );
}
