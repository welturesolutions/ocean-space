"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MotivationsSection() {
  return (
    <>
      <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] 2xl:px-0 py-[5em] md:py-[8em] xl:py-[10em]">
        <div className="text-center">
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
            The Motivations <br />
            Behind Our Actions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="xl:w-[50%] 2xl:w-[35%] m-auto text-[#555E6E] !text-[18px] mb-[40px]"
          >
            It's simple — we're driven by a passion to empower businesses
            through technology. Every solution we deliver is designed to help
            you succeed, grow, and thrive in today's digital world.
          </motion.p>
          <div className="w-max m-auto">
            <Link href="/services">
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
                Explore our services
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
    </>
  );
}
