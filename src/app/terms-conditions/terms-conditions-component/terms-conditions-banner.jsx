"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsConditionsBanner() {
  return (
    <div className="bg-[url(/privacy-policy/privacy-policy-banner.png)] bg-no-repeat bg-cover bg-center text-white text-center">
      <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] 2xl:px-0 pt-[13em] pb-[10em] xl:pt-[15em] xl:pb-[12em]">
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
          Terms & Conditions
        </motion.h1>
        <motion.h4
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
          className="leading-[1.2] nunitoSans"
        >
          Last updated June 3, 2025
        </motion.h4>
      </div>
    </div>
  );
}
