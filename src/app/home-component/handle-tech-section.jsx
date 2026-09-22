"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HandleTechSection() {
  return (
    <>
      <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] pb-[5em] md:pb-[8em] md:pt-0 xl:pb-[10em] xl:pt-[5em] text-center">
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
            Why Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="text-[#0A0D14] font-[600] m-auto mb-[40px] capitalize"
          >
            We handle tech, <br /> you drive the vision
          </motion.h2>
        </div>
        <div className="grid xl:grid-cols-3 gap-[3em] xl:gap-[1em] 2xl:gap-[2em]">
          <div>
            <div className="bg-[#D9FFFD] rounded-[25px] w-max m-auto p-[15px]">
              <Image
                className="w-[30px] h-[30px] object-cover"
                src="/home/handle-1.svg"
                alt="handleSvg"
                width={100}
                height={100}
              />
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="my-[20px] font-[600]"
            >
              Trusted IT BPO Partner
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="text-[#555e6e] xl:w-[90%] m-auto"
            >
              We understand how overwhelming IT management can be. That is why
              we are here to be your reliable and trusted partner in handling
              your IT needs.
            </motion.p>
          </div>
          <div>
            <div className="bg-[#DFFFDE] rounded-[25px] w-max m-auto p-[15px]">
              <Image
                className="w-[30px] h-[30px] object-cover"
                src="/home/handle-2.svg"
                alt="handleSvg"
                width={100}
                height={100}
              />
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="my-[20px] font-[600]"
            >
              24/7 Support
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="text-[#555e6e] xl:w-[90%] m-auto"
            >
              Our expert-driven services, cutting-edge technology, and dedicated
              team provide around-the-clock support, ensuring your IT operations
              run smoothly without stress.
            </motion.p>
          </div>
          <div>
            <div className="bg-[#E1EDFF] rounded-[25px] w-max m-auto p-[15px]">
              <Image
                className="w-[30px] h-[30px] object-cover"
                src="/home/handle-3.svg"
                alt="handleSvg"
                width={100}
                height={100}
              />
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="my-[20px] font-[600]"
            >
              Focus on Growth
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
              className="text-[#555e6e] xl:w-[90%] 2xl:w-[95%] m-auto"
            >
              By letting us manage your IT, you can concentrate on growing your
              business and achieving your vision, with the confidence that you
              have the best partner by your side.
            </motion.p>
          </div>
        </div>
        <Image
          className="w-full h-[250px] xl:h-[350px] object-cover rounded-[35px] mt-[5em]"
          src="/home/handle-bg-img.jpg"
          alt="handleBgImg"
          width={1000}
          height={1000}
          unoptimized
        />
      </div>
    </>
  );
}
