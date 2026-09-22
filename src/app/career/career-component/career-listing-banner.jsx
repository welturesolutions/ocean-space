"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CareerListingBanner() {
  return (
    <div className="bg-no-repeat bg-cover bg-center text-[#0A0D14] career-listing-banner ">
      <div className="mx-auto md:max-w-[1600px] px-[1rem] md:px-[2.5rem] 2xl:px-0 pt-[13em] pb-[10em] xl:pt-[20em] xl:pb-[15em]">
        <div className="mx-auto text-center xl:text-left xl:max-w-[1400px] px-[1rem] md:px-[2.5rem] 2xl:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="mb-[10px]"
          >
            Career Listing
          </motion.h1>

          <motion.h4
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="leading-[1.2]"
          >
            As deep as the ocean, as wide as space—{" "}
            <br className="hidden md:block" /> your potential grows here.
          </motion.h4>
        </div>
      </div>
    </div>
  );
}
