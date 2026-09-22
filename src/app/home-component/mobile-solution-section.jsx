"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MobileSolutionSection() {
  return (
    <div className="mx-auto max-w-[1600px] px-[1rem] md:px-[2.5rem] 2xl:px-0 pb-[5em] md:pb-[8em] overflow-clip">
      <div className="text-center mobile-pin-section z-10 relative">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="uppercase text-[#002991] mb-[1em] font-[600] plexSans"
        >
          Expertise and Services
        </motion.p>
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
          Reach for the Solutions <br /> That Drive Success
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="xl:w-[50%] 2xl:w-[45%] m-auto text-[#555E6E] !text-[18px] mb-[40px]"
        >
          Whatever your goal, we've got you covered. We handle all your IT needs
          so you can focus on what matters most: driving growth, maximizing
          returns, and expanding your reach. Let us take care of the tech while
          you achieve your business goals.
        </motion.p>
        <div className="hidden md:block w-max m-auto">
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
              Get Started with Expert Solutions
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
      <div className="overflow-visible relative pt-[3em] md:pt-[5em]">
        <div className="sticky-container absolute h-[70%] w-full hidden md:block">
          <div className="image-stick flex justify-between sticky top-[100px]">
            <div className="-ml-[7em]">
              <Image
                className="w-[200px] h-full"
                src="/home/top-left-shape.png"
                alt="topLeftShape"
                width={1000}
                height={1000}
              />
            </div>
            <div className="-mr-[6em]">
              <Image
                className="w-[200px] h-full"
                src="/home/right-top-shape.png"
                alt="rightTopShape"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className="sticky-container absolute h-[60%] w-full top-[700px] hidden md:block">
          <div className="image-stick flex justify-between sticky top-[700px]">
            <div className="-ml-[7em]">
              <Image
                className="w-[200px] h-full"
                src="/home/bottom-left-shape.png"
                alt="bottomLeftShape"
                width={1000}
                height={1000}
              />
            </div>
            <div className="-mr-[6em]">
              <Image
                className="w-[200px] h-full"
                src="/home/bottom-right-shape.png"
                alt="bottomRightShape"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[50px]">
          {[
            {
              bg: "#73D2FE",
              text: "#002991",
              rotate: "-4deg",
              icon: "/home/rocket-icon.svg",
              alt: "rocketSvg",
              title: "Drive Business Growth",
              desc: "We streamline your operations and optimize resources, so you can focus on scaling with confidence.",
              top: 100,
            },
            {
              bg: "#D9FFFD",
              text: "#006260",
              rotate: "4deg",
              icon: "/home/handshake-icon.svg",
              alt: "handshakeSvg",
              title: "Retain Loyal Customers",
              desc: "We build trust and create seamless experiences that keep your customers coming back.",
              top: 100,
            },
            {
              bg: "#DFFFDE",
              text: "#036D00",
              rotate: "-4deg",
              icon: "/home/efficiency-icon.svg",
              alt: "efficiencySvg",
              title: "Enhance Operational Efficiency",
              desc: "We eliminate bottlenecks and reduce costs, giving you more time and resources to innovate.",
              top: 100,
            },
            {
              bg: "#E1EDFF",
              text: "#002991",
              rotate: "4deg",
              icon: "/home/key-icon.svg",
              alt: "keySvg",
              title: "Unlock New Opportunities",
              desc: "We harness data-driven insights and automation to keep you ahead of the competition.",
              top: 100,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="card-stacking w-[320px] md:w-[400px] rounded-[35px] px-[30px] py-[40px] 2xl:py-[80px] 2xl:px-[50px] sticky flex flex-col gap-[80px]"
              style={{
                backgroundColor: card.bg,
                color: card.text,
                transform: `rotate(${card.rotate})`,
                top: `${card.top}px`,
              }}
            >
              <div className="bg-[#FFFFFF] rounded-[25px] w-max p-[15px]">
                <Image
                  className="w-[30px] h-[30px] object-cover"
                  src={card.icon}
                  alt={card.alt}
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <h5 className="font-bold mb-[20px] plexSans">{card.title}</h5>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:hidden w-max m-auto mt-[5em]">
        <Link href="/services" aria-label="Navigate to services page">
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="flex items-center gap-[5px] bg-[#60CDFF] hover:!opacity-[0.8] text-[#002991] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow font-bold break-normal !text-[16px]"
          >
            Get Started with Expert Solutions
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
  );
}
