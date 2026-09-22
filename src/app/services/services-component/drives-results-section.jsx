"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DrivesResultsSection() {
  return (
    <div className="bg-[url(/privacy-policy/privacy-policy-banner.png)] bg-no-repeat bg-cover bg-center">
      <div className="mx-auto xl:max-w-[1400px] px-[1rem] md:px-[2.5rem] 2xl:px-0 py-[5em] md:py-[8em] xl:py-[10em] z-10 relative">
        {/* <div className="blur-light-blue-bg absolute"></div> */}
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
          className="text-white text-center font-[600] mb-[35px] !text-[25px] md:!text-[35px] xl:w-[40%] 2xl:w-[30%] m-auto !leading-[1.2]"
        >
          Looking for an IT partner that drives results?
        </motion.h3>
        <div className="w-max m-auto">
          <Link href="/contact-us">
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
              className="flex items-center gap-[5px] bg-[#60CDFF] hover:!opacity-[0.8] text-[#002991] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow font-bold"
            >
              Let's Get Started
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
    </div>
  );
}
