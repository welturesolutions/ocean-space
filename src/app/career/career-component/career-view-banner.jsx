"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function CareerViewBanner({ title, employmentType }) {
  return (
    <div className="bg-no-repeat bg-cover bg-center text-[#0A0D14] bg-[linear-gradient(to_bottom,#E1EDFF_0%,#E1EDFF_70%,#BDD7FF_100%)]">
      <div className="mx-auto px-[1rem] pt-[13em] pb-[10em] md:px-[2.5rem] xl:pt-[20em] xl:pb-[15em] 2xl:max-w-[1600px] 2xl:px-0">
        <div className="mx-auto px-[1rem] md:px-[2.5rem] 2xl:px-0 text-center xl:max-w-[1400px]">
          <div className="flex w-full justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="bg-[#15CDCA] text-[#002991] py-[8px] px-[20px] rounded-[30px] w-max"
            >
              <p className="text-[#0A0D14] !text-[14px] font-[600] plexSans uppercase">
                {employmentType}
              </p>
            </motion.div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="font-[500] text-center py-[20px]"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="flex flex-row gap-[10px] justify-center max-sm:flex-col max-sm:items-center"
          >
            <Link href="/career/career-listing">
              <div className="flex items-center gap-[5px] bg-[#FFFFFF] hover:opacity-[0.8] text-[#002991] py-[8px] pl-[10px] pr-[20px] rounded-[16px] btn-shadow w-max font-bold">
                <Image
                  className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
                  src="/services/back-arrow-icon.svg"
                  alt="backArrowIcon"
                  width={100}
                  height={100}
                />
                Back
              </div>
            </Link>
            <Link
              className={`nunitoSans flex items-center gap-[5px] bg-[#002991] hover:opacity-[0.8] text-[#FFFFFF] !text-[16px] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow w-max font-[700]`}
              onClick={() => {
                document
                  .getElementById("career-form")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              href="#career-form"
            >
              Apply For This Job
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
                  fill={"#FFFFFF"}
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
