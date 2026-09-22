"use client";
import { motion } from "framer-motion";

export default function AboutUsBanner() {
  return (
    <>
      <div className="bg-[url(/about-us/about-us-banner.jpg)] bg-no-repeat bg-cover bg-center text-white">
        <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] 2xl:px-0 pt-[13em] pb-[10em] xl:pt-[20em] xl:pb-[15em]">
          <div className="mx-auto xl:max-w-[1400px] px-[1rem] md:px-[2.5rem] 2xl:px-0 text-center xl:text-left">
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
              About Us
            </motion.h1>
            <motion.h4
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
            >
              Smarter Solutions, Better Tomorrow
            </motion.h4>
          </div>
        </div>
      </div>
    </>
  );
}
