"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustedSection() {
  return (
    <>
      <div className="bg-[#F6F8FA] rounded-t-[40px] relative xl:-mt-[5em] 2xl:-mt-[3em]">
        <div className="absolute w-full -translate-y-[50%] top-[67%] xl:top-[70%] z-20">
          <svg
            width="1535"
            height="248"
            viewBox="0 0 1535 248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M474.89 247.81C414.75 247.81 356.66 239.77 301.5 223.78C241.44 206.36 184.74 179.53 132.99 144.03C44.72 83.47 1.78 19.23 0 16.53L25.04 0.01C25.86 1.24 67.62 63.09 151.04 120.03C228.09 172.62 357.71 231.75 537.65 214.82C667.09 202.64 777.45 154.74 884.17 108.41C976 68.55 1070.95 27.33 1175.2 10.98C1231.56 2.14 1286.2 1.01 1342.25 7.53C1404.81 14.81 1467.55 31.36 1534.08 58.15L1522.88 85.98C1257.41 -20.89 1081.92 55.28 896.13 135.94C787.25 183.2 674.66 232.08 540.47 244.7C518.38 246.78 496.5 247.82 474.9 247.82L474.89 247.81ZM12.52 8.27L25.03 0C25.03 0 25.03 0 25.03 0.01L12.51 8.27H12.52Z"
              fill="url(#paint0_linear_1248_596)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1248_596"
                x1="0"
                y1="123.91"
                x2="1534.08"
                y2="123.91"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0114075" stopColor="white" stopOpacity="0" />
                <stop offset="0.0459559" stopColor="white" stopOpacity="0.1" />
                <stop offset="0.119942" stopColor="white" />
                <stop offset="0.885547" stopColor="white" />
                <stop offset="0.97974" stopColor="white" stopOpacity="0.1" />
                <stop offset="0.993103" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] 2xl:px-0 py-[5em] md:py-[8em] xl:py-[10em]">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-[#0A0D14] font-[600] md:w-[80%] xl:w-[50%] m-auto mb-[2em] md:mb-[3em] xl:mb-[5em] text-center xl:text-left"
            >
              Your trusted IT BPO partner with expert support so you can focus
              on growth and vision.
            </motion.h2>
          </div>
          <div className="flex gap-[4em] xl:gap-[8em] 2xl:gap-[10em] justify-center">
            <div>
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1.0,
                    ease: "easeOut",
                    type: "tween",
                    stiffness: 100,
                    damping: 20,
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  className="w-[150px] h-[150px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px] object-cover rounded-[20px] relative z-20 hidden md:block"
                  src="/home/trusted-img-1.jpg"
                  alt="trustedImg"
                  width={500}
                  height={500}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    ease: "easeOut",
                    type: "tween",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.2,
                  },
                }}
                viewport={{ once: true }}
                className="bg-[#2EBDFF] w-[70px] h-[70px] xl:w-[120px] xl:h-[120px] rounded-[16px] xl:rounded-[25px] mt-[2em] xl:mt-[5em] right-[2em] xl:right-[5em] relative z-20 hidden md:block"
              ></motion.div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 2.0,
                    ease: "easeOut",
                    type: "tween",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.4,
                  },
                }}
                viewport={{ once: true }}
                className="bg-[#E1EDFF] w-[70px] xl:w-[120px] h-[70px] xl:h-[120px] rounded-[16px] xl:rounded-[25px] xl:-top-[2em] -left-[1em] xl:-left-[3em] absolute hidden md:block"
              ></motion.div>
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1.0,
                    ease: "easeOut",
                    type: "tween",
                    stiffness: 100,
                    damping: 20,
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  className="md:w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] 2xl:w-[450px] 2xl:h-[450px] object-cover rounded-[20px] mt-0 md:mt-[3em] z-10 relative"
                  src="/home/trusted-img-2.jpg"
                  alt="trustedImg"
                  width={500}
                  height={500}
                />
              </motion.div>
            </div>
            <div>
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 2.0,
                      ease: "easeOut",
                      type: "tween",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.6,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    className="w-[120px] h-[120px] xl:w-[200px] xl:h-[200px] object-cover rounded-[20px] relative z-20 hidden md:block"
                    src="/home/trusted-img-3.jpg"
                    alt="trustedImg"
                    width={500}
                    height={500}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 3.0,
                      ease: "easeOut",
                      type: "tween",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.4,
                    },
                  }}
                  viewport={{ once: true }}
                  className="bg-[#002991] w-[60px] xl:w-[120px] h-[60px] xl:h-[120px] rounded-[16px] xl:rounded-[25px] -bottom-[2em] -right-[4em] xl:-right-[7em] 2xl:-right-[10em] absolute z-20 hidden xl:block"
                ></motion.div>
              </div>
              <div className="relative hidden md:block">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 2.0,
                      ease: "easeOut",
                      type: "tween",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.8,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Image
                    className="w-[120px] h-[120px] xl:w-[200px] xl:h-[200px] object-cover rounded-[20px] ml-[2em] xl:ml-[5em] mt-[5em] z-10 relative"
                    src="/home/trusted-img-4.jpg"
                    alt="trustedImg"
                    width={500}
                    height={500}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                      duration: 1.0,
                      ease: "easeOut",
                      type: "tween",
                      stiffness: 100,
                      damping: 20,
                      delay: 0.2,
                    },
                  }}
                  viewport={{ once: true }}
                  className="bg-[#DFFFDE] w-[60px] xl:w-[120px] h-[60px] xl:h-[120px] rounded-[16px] xl:rounded-[25px] -bottom-[2em] absolute"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
