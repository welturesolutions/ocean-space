"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LookingJobSection() {
  return (
    <>
      <div className="bg-[#E1EDFF]">
        <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] pt-[5em] pb-[10em] md:py-[8em] xl:pt-[10em] xl:pb-[13em]">
          <div className="grid xl:grid-cols-[auto_40%] items-center gap-[50px] xl:gap-[5em]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }} // Ensures animation triggers only once
                className="uppercase text-[#002991] mb-[1em] font-[600] plexSans"
              >
                Looking for a Job? Join Our Team!
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: true }}
                className="text-[#0A0D14] font-[600] m-auto mb-[40px] xl:mb-[50px] capitalize !text-[30px] xl:!text-[45px]"
              >
                We're always on the lookout for talented individuals who are
                passionate about technology, innovation, and making an impact.
              </motion.h2>
              <div className="w-max">
                <Link href="/about-us">
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1 },
                    }}
                    className="flex items-center gap-[5px] bg-[#60CDFF] hover:!opacity-[0.8] text-[#002991] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow w-max font-bold"
                  >
                    Explore our careers
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
            <Image
              className="w-full h-[300px] xl:h-[450px] object-cover rounded-[35px]"
              src="/home/looking-job-img-1.jpg"
              alt="lookingBgImg"
              width={1000}
              height={1000}
              unoptimized
            />
          </div>
        </div>
      </div>
    </>
  );
}
