"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

export default function IndustriesSection() {
  return (
    <>
      <div className="bg-[#F6F8FA] rounded-t-[40px] -mt-[3em]">
        <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] py-[5em] md:pt-[8em] md:pb-[5em] xl:pt-[8em] xl:pb-[5em]">
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
              We serve these industries
            </motion.h2>
            <p className="m-auto text-[#555E6E] !text-[18px] mb-[20px]">
              Is your industry not listed? Let's discuss how we can help.
            </p>
            <div className="flex gap-[15px] items-center bg-[#60CDFF] hover:opacity-[0.8] btn-shadow py-[8px] px-[20px] rounded-[16px] w-max m-auto z-10 relative">
              <Image
                className="w-[20px] h-[20px] object-contain"
                src="/home/mail-icon.svg"
                alt="mailIcon"
                width={100}
                height={100}
              />
              <Link href="/contact-us" className="text-[#002991] !text-[16px]">
                Send An Inquiry
              </Link>
            </div>
            <p className="text-[#555E6E] mt-[20px]">
              Or email us directly at{" "}
              <a
                href="mailto:enquiries@osbpo.com"
                className="underline underline-offset-2 text-[#002991] !font-[400] !text-[18px]"
              >
                enquiries@osbpo.com
              </a>
            </p>
          </div>
          {/* Auto slider keep loop */}
          <div className="mt-[5em]">
            <Splide
              options={{
                type: "loop",
                autoWidth: true,
                gap: "20px",
                autoScroll: {
                  speed: 0.5,
                  pauseOnHover: false,
                  pauseOnFocus: false,
                },
                arrows: false,
                pagination: false,
                drag: false,
                direction: "ltr",
                breakpoints: {
                  768: { perPage: 2, gap: "20px" },
                  1196: { perPage: 3, gap: "20px" },
                },
              }}
              extensions={{ AutoScroll }}
              className="w-full pointer-none"
            >
              <SplideSlide className="xl:!text-[25px]">
                Tech Startups
              </SplideSlide>
              <SplideSlide>
                <Image
                  className="w-[15px] h-[15px] object-contain"
                  src="/home/footer-star.svg"
                  alt="starIcon"
                  width={100}
                  height={100}
                />
              </SplideSlide>
              <SplideSlide className="xl:!text-[25px]">
                Finance & Banking
              </SplideSlide>
              <SplideSlide>
                <Image
                  className="w-[15px] h-[15px] object-contain"
                  src="/home/footer-star.svg"
                  alt="starIcon"
                  width={100}
                  height={100}
                />
              </SplideSlide>
              <SplideSlide className="xl:!text-[25px]">
                E-commerce & Retail
              </SplideSlide>
              <SplideSlide>
                <Image
                  className="w-[15px] h-[15px] object-contain"
                  src="/home/footer-star.svg"
                  alt="starIcon"
                  width={100}
                  height={100}
                />
              </SplideSlide>
              <SplideSlide className="xl:!text-[25px]">
                Manufacturing
              </SplideSlide>
              <SplideSlide>
                <Image
                  className="w-[15px] h-[15px] object-contain"
                  src="/home/footer-star.svg"
                  alt="starIcon"
                  width={100}
                  height={100}
                />
              </SplideSlide>
              <SplideSlide className="xl:!text-[25px]">Healthcare</SplideSlide>
              <SplideSlide>
                <Image
                  className="w-[15px] h-[15px] object-contain"
                  src="/home/footer-star.svg"
                  alt="starIcon"
                  width={100}
                  height={100}
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
}
