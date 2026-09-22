"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function HomeBanner() {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const phrases = ["Growth <br/> Without Limits", "Tech <br/> With Vision"];
    let tl = gsap.timeline({ repeat: -1 });

    phrases.forEach((phrase, index) => {
      tl
        // Ensure text starts with opacity 0 before typing
        .set(textRef.current, { opacity: 0 })
        // Fade in and type out the phrase
        .to(textRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "none",
        })
        .to(textRef.current, {
          duration: phrase.length * 0.1,
          text: { value: phrase, delimiter: "" },
          ease: "none",
        })
        // Pause after typing
        .to(textRef.current, {
          duration: 1.5,
          ease: "none",
        })
        // Fade out after pause
        .to(textRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "none",
        })
        // Clear text after fade out
        .set(textRef.current, {
          text: { value: "", delimiter: "" },
        });
    });

    // Ensure cursor blinks continuously
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1]">
        <video
          src="/home/home-banner-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative mx-auto xl:max-w-[1400px] px-[1rem] md:px-[2.5rem] 2xl:px-0 pt-[15em] pb-[10em] xl:pt-[20em] xl:pb-[15em] 2xl:pb-[25em] 2xl:pt-[20em] h-full m-home-banner">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-white font-bold h-[150px]">
            <span ref={textRef}></span>
          </h1>
          <h4 className="text-white mt-[20px] mb-[40px] md:w-[60%] xl:w-[40%] !leading-[1.2]">
            Unlock endless possibilities with Ocean Space. Elevate your business
            with superior IT solutions that drive success.
          </h4>
          <Link
            href="/about-us"
            className="flex items-center gap-[5px] bg-[#60CDFF] hover:opacity-[0.8] text-[#002991] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow w-max"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
            >
              <path
                d="M13.1724 12.0007L8.22266 7.05093L9.63688 5.63672L16.0008 12.0007L9.63688 18.3646L8.22266 16.9504L13.1724 12.0007Z"
                fill="#002991"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
