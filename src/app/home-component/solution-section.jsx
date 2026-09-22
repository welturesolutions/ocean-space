"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  useEffect(() => {
    const squareSvgQuery = document.querySelectorAll(".square-svg");
    const triangleSvgQuery = document.querySelectorAll(".triangle-svg");
    const mm = gsap.matchMedia();

    mm.add("(min-width:769px)", () => {
      const setupParallax = (query) => {
        const handleMouseMove = (e) => {
          const rect = query.getBoundingClientRect();
          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;

          const moveX = (relX - rect.width / 2) / rect.width;
          const moveY = (relY - rect.height / 2) / rect.height;

          gsap.to(query, {
            x: moveX * -100,
            y: moveY * -30,
            duration: 1,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(query, {
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });
        };

        query.addEventListener("mousemove", handleMouseMove);
        query.addEventListener("mouseleave", handleMouseLeave);
      };

      const squareSvgAnimation = squareSvgQuery.forEach((query) => {
        setupParallax(query);
      });
      const triangleSvgAnimation = triangleSvgQuery.forEach((query) => {
        setupParallax(query);
      });

      return () => {
        squareSvgAnimation?.();
        triangleSvgAnimation?.();
      };
    });
  }, []);

  const cardTextRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const el = cardTextRef.current;

    mm.add("(min-width:769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: "+=5000",
          scrub: true,
          pin: true,
        },
      });

      const mm = gsap.matchMedia();

      tl.fromTo(
        el,
        { scale: 10, opacity: 0 },
        { scale: 1, opacity: 1, duration: 5 }
      );

      mm.add("(min-width:769px) and (max-width:1535px)", () => {
        tl.fromTo(
          ".overlay-item:nth-child(1)",
          { yPercent: 100, opacity: 0, zIndex: 1 },
          {
            yPercent: -35,
            opacity: 1,
            zIndex: 101,
            duration: 5,
            onUpdate: function () {
              const progress = this.progress();

              if (progress === 1) {
                gsap.to(el, { "--before-color": "#0A0D141A" });
              } else if (progress === 0) {
                gsap.to(el, { "--before-color": "#0A0D14" });
              }
            },
          },
          "+=0.5"
        );
      });

      mm.add("(min-width:1536px)", () => {
        tl.fromTo(
          ".overlay-item:nth-child(1)",
          { yPercent: 100, opacity: 0, zIndex: 1 },
          {
            yPercent: -35,
            opacity: 1,
            zIndex: 101,
            duration: 5,
            onUpdate: function () {
              const progress = this.progress();

              if (progress === 1) {
                gsap.to(el, { "--before-color": "#0A0D141A" });
              } else if (progress === 0) {
                gsap.to(el, { "--before-color": "#0A0D14" });
              }
            },
          },
          "+=0.5"
        );
      });

      mm.add("(min-width:769px)and (max-width:1535px)", () => {
        tl.fromTo(
          ".overlay-item:nth-child(2)",
          { yPercent: 100, opacity: 0, zIndex: 102 },
          { yPercent: -135, opacity: 1, zIndex: 102, duration: 5 },
          "+=0.5"
        );
      });

      mm.add("(min-width:1536px)", () => {
        tl.fromTo(
          ".overlay-item:nth-child(2)",
          { yPercent: 100, opacity: 0, zIndex: 102 },
          { yPercent: -141, opacity: 1, zIndex: 102, duration: 5 },
          "+=0.5"
        );
      });

      mm.add("(min-width:769px) and (max-width:1535px)", () => {
        tl.fromTo(
          ".overlay-item:nth-child(3)",
          { yPercent: 100, opacity: 0, zIndex: 103 },
          { yPercent: -225, opacity: 1, zIndex: 103, duration: 5 },
          "+=0.5"
        );
      });

      mm.add("(min-width:1536px)", () => {
        tl.fromTo(
          ".overlay-item:nth-child(3)",
          { yPercent: 100, opacity: 0, zIndex: 103 },
          { yPercent: -232, opacity: 1, zIndex: 103, duration: 5 },
          "+=0.5"
        );
      });

      mm.add("(min-width:769px) and (max-width:1535px)", () => {
        tl.to(".overlay-item:nth-child(1)", { opacity: 0, duration: 0.25 });
      });

      mm.add("(min-width:1536px)", () => {
        tl.to(".overlay-item:nth-child(1)", { opacity: 0, duration: 0.25 });
      });

      mm.add("(min-width:1536px)", () => {
        tl.fromTo(
          ".overlay-item:nth-child(4)",
          { yPercent: 100, opacity: 0, zIndex: 103 },
          { yPercent: -345, opacity: 1, zIndex: 103, duration: 5 },
          "+=0.5"
        );
      });

      mm.add("(min-width:769px) and (max-width:1535px)", () => {
        tl.fromTo(
          ".overlay-item:nth-child(4)",
          { yPercent: 100, opacity: 0, zIndex: 103 },
          { yPercent: -325, opacity: 1, zIndex: 103, duration: 5 },
          "+=0.5"
        );
      });

      mm.add("(min-width:769px) and (max-width:1535px)", () => {
        tl.to(".overlay-item:nth-child(2)", { opacity: 0, duration: 0.25 });
      });

      mm.add("(min-width:1536px)", () => {
        tl.to(".overlay-item:nth-child(2)", { opacity: 0, duration: 0.25 });
      });

      // ✅ Cleanup for timeline
      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    // ✅ Cleanup for all matchMedia queries
    return () => {
      mm.revert();
    };
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width:425px)", () => {
      const mainTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: "+=1350",
          scrub: true,
          pin: true,
        },
      });

      const mobileTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile-pin-section",
          start: "bottom top",
          end: "+=1500",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      // Overlay animations
      mobileTimeline.fromTo(
        ".overlay-item:nth-child(2)",
        { yPercent: 100, opacity: 0, zIndex: 102 },
        { yPercent: -150, opacity: 1, zIndex: 102 }
      );
      mobileTimeline.fromTo(
        ".overlay-item:nth-child(3)",
        { yPercent: 100, opacity: 0, zIndex: 103 },
        { yPercent: -240, opacity: 1, zIndex: 103 }
      );
      mobileTimeline.to(".overlay-item:nth-child(1)", {
        opacity: 0,
        duration: 0.25,
      });
      mobileTimeline.fromTo(
        ".overlay-item:nth-child(4)",
        { yPercent: 100, opacity: 0, zIndex: 104 },
        { yPercent: -355, opacity: 1, zIndex: 104 }
      );
      mobileTimeline.to(".overlay-item:nth-child(2)", {
        opacity: 0,
        duration: 0.25,
      });

      mm.add("(min-width:376px) and (max-width:425px)", () => {
        mobileTimeline.to(
          ".mobile-solution-btn",
          { xPercent: -60, yPercent: -3350 },
          "+=0.1"
        );
      });

      mm.add("(min-width:321px) and (max-width:375px)", () => {
        mobileTimeline.to(
          ".mobile-solution-btn",
          { xPercent: -52.5, yPercent: -3350 },
          "+=0.1"
        );
      });

      mm.add("(max-width:320px)", () => {
        mobileTimeline.to(
          ".mobile-solution-btn",
          { xPercent: -50, yPercent: -3400 },
          "+=0.1"
        );
      });

      // ✅ Cleanup for this media query
      return () => {
        mainTimeline.scrollTrigger && mainTimeline.scrollTrigger.kill();
        mainTimeline.kill();

        mobileTimeline.scrollTrigger && mobileTimeline.scrollTrigger.kill();
        mobileTimeline.kill();
      };
    });

    // ✅ Cleanup all matchMedia queries on unmount
    return () => {
      mm.revert();
    };
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const el = cardTextRef.current;

    mm.add("(min-width: 426px) and (max-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: "+=5000",
          scrub: true,
          pin: true,
        },
      });

      // // Optional: animate overlay items
      tl.fromTo(
        ".overlay-item:nth-child(1)",
        { yPercent: 100, opacity: 0, zIndex: 102 },
        {
          yPercent: 5,
          opacity: 1,
          zIndex: 102,
          onUpdate: function () {
            const progress = this.progress();

            if (progress === 1) {
              gsap.to(el, { "--before-color": "#0A0D141A" });
            } else if (progress === 0) {
              gsap.to(el, { "--before-color": "#0A0D14" });
            }
          },
        }
      );

      tl.fromTo(
        ".overlay-item:nth-child(2)",
        { yPercent: 100, opacity: 0, zIndex: 102 },
        {
          yPercent: -145,
          opacity: 1,
          zIndex: 103,
        }
      );
      tl.fromTo(
        ".overlay-item:nth-child(3)",
        { yPercent: 100, opacity: 0, zIndex: 103 },
        { yPercent: -236, opacity: 1, zIndex: 104 }
      );
      tl.to(".overlay-item:nth-child(1)", { opacity: 0, duration: 0.25 });
      tl.fromTo(
        ".overlay-item:nth-child(4)",
        { yPercent: 100, opacity: 0, zIndex: 104 },
        { yPercent: -335, opacity: 1, zIndex: 104 }
      );
      tl.to(".overlay-item:nth-child(2)", { opacity: 0, duration: 0.25 });

      // ✅ Cleanup for this media query
      return () => {
        tl.scrollTrigger && tl.scrollTrigger.kill();
        tl.kill();
      };
    });

    // ✅ Cleanup all matchMedia queries on unmount
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <div className="mx-auto xl:max-w-[1600px] 2xl:max-w-screen px-[1rem] md:px-[2.5rem] 2xl:px-0 pb-[5em] sm:pb-[3em] md:pb-[8em] xl:pb-[10em] md:pt-0">
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
            className="xl:w-[50%] 2xl:w-[45%] m-auto text-[#555E6E] !text-[18px] mb-[40px] "
          >
            Whatever your goal, we've got you covered. We handle all your IT
            needs so you can focus on what matters most: driving growth,
            maximizing returns, and expanding your reach. Let us take care of
            the tech while you achieve your business goals.
          </motion.p>
          <div className="hidden sm:block w-max m-auto">
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
        <div className="pin-section overflow-visible h-screen relative">
          <div className="flex flex-row justify-around -mb-[70px] sm:justify-normal sm:h-[35%] sm:gap-[50%] xl:justify-around xl:mt-[70px] xl:gap-[35%] 2xl:-mb-[120px] 2xl:mt-[85px] 2xl:gap-[0%] 2xl:justify-evenly">
            {/* sm:mt-[150px] */}
            <div className="hidden sm:block square-svg relative">
              <Image
                className="hidden sm:block object-cover w-[8em] h-[8em] sm:w-[35em] sm:h-[11em] sm:left-[-4em] sm:top-[4em] xl:w-[10em] xl:h-[10em] xl:rounded-[25px] xl:left-[4em] xl:top-[4em] rounded-[16px] rotate-[5deg] relative z-10 2xl:w-[15em] 2xl:h-[15em]"
                src="/home/solution-img-1.jpg"
                alt="solutionImg"
                width={500}
                height={500}
              />
              {/* sm:w-[35em] sm:h-[11em] sm:left-[-4em] */}
            </div>
            <div className="triangle-svg relative">
              <Image
                className="hidden sm:block sm:left-[3em] xl:left-[8em] 2xl:w-full 2xl:h-full object-cover object-center svg-mask"
                src="/home/solution-img-2.jpg"
                alt="solutionImg"
                width={500}
                height={500}
              />

              <Image
                className="hidden sm:block object-cover object-center absolute sm:left-[3em] sm:top-[15em] xl:w-[12em] xl:h-[12em] xl:top-[50%] xl:left-[25%] 2xl:w-[200px] 2xl:h-[200px] 2xl:top-[50%] 2xl:left-[50%] custom-translate z-10"
                src="/home/polygon-icon.svg"
                alt="solutionImg"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div
            ref={cardTextRef}
            className="flex justify-center relative card-text mt-[10em] md:mt-[8em] xl:mt-[12em] xl:mb-[5em] 2xl:mt-[20em] "
          ></div>
          <div className="absolute top-1/2 left-1/2 overlay-div z-1 w-full md:w-auto">
            <div className="overlay-item bg-[#73D2FE] text-[#002991] -rotate-[4deg] rounded-[35px] px-[30px] py-[40px] -translate-x-1/2 -translate-y-[200px] xl:-translate-y-1/2 2xl:-translate-y-1/2 2xl:py-[80px] 2xl:px-[50px]">
              <div className="bg-[#FFFFFF] rounded-[25px] w-max p-[15px] mb-[8em]">
                <Image
                  className="w-[30px] h-[30px] object-cover"
                  src="/home/rocket-icon.svg"
                  alt="rocketSvg"
                  width={100}
                  height={100}
                />
              </div>
              <h5 className="font-bold mb-[20px] plexSans">
                Drive Business Growth
              </h5>
              <p>
                We streamline your operations and optimize resources, so you can
                focus on scaling with confidence.
              </p>
            </div>
            <div className="overlay-item bg-[#D9FFFD] rounded-[35px] px-[30px] -translate-x-1/2 -translate-y-1/2 py-[40px] text-[#006260] -rotate-[-4deg] relative 2xl:py-[80px] 2xl:px-[50px] ">
              <div className="bg-[#FFFFFF] rounded-[25px] w-max p-[15px] mb-[8em]">
                <Image
                  className="w-[30px] h-[30px] object-cover"
                  src="/home/handshake-icon.svg"
                  alt="handshakeSvg"
                  width={100}
                  height={100}
                />
              </div>
              <h5 className="font-bold mb-[20px] plexSans">
                Retain Loyal Customers
              </h5>
              <p>
                We build trust and create seamless experiences that keep your
                customers coming back.
              </p>
            </div>
            <div className="overlay-item bg-[#DFFFDE] rounded-[35px] px-[30px] -translate-x-1/2 -translate-y-1/2 py-[40px] text-[#036D00] -rotate-[5deg] relative 2xl:py-[80px] 2xl:px-[50px]">
              <div className="bg-[#FFFFFF] rounded-[25px] w-max p-[15px] mb-[8em]">
                <Image
                  className="w-[30px] h-[30px] object-cover"
                  src="/home/efficiency-icon.svg"
                  alt="efficiencySvg"
                  width={100}
                  height={100}
                />
              </div>
              <h5 className="font-bold mb-[20px] plexSans">
                Enhance Operational Efficiency
              </h5>
              <p>
                We eliminate bottlenecks and reduce costs, giving you more time
                and resources to innovate.
              </p>
            </div>
            <div className="overlay-item bg-[#E1EDFF] rounded-[35px] px-[30px] -translate-x-1/2 -translate-y-1/2 py-[40px] text-[#002991] -rotate-[-4deg] relative 2xl:py-[80px] 2xl:px-[50px] ">
              <div className="bg-[#FFFFFF] rounded-[25px] w-max p-[15px] mb-[8em]">
                <Image
                  className="w-[30px] h-[30px] object-cover"
                  src="/home/key-icon.svg"
                  alt="efficiencySvg"
                  width={100}
                  height={100}
                />
              </div>
              <h5 className="font-bold mb-[20px] plexSans">
                Unlock New Opportunities
              </h5>
              <p>
                We harness data-driven insights and automation to keep you ahead
                of the competition.
              </p>
            </div>
            <div className="md:hidden w-max m-auto mobile-solution-btn">
              <Link href="/services">
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-[5px] bg-[#60CDFF] hover:!opacity-[0.8] text-[#002991] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow font-bold break-normal"
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
          <div className="flex flex-row justify-around mt-[7em] -mb-[70px] 2xl:mt-[15em] 2xl:-mb-[120px] 2xl:justify-center 2xl:gap-[5rem]">
            <div className="relative sm:h-[250px] xl:h-auto triangle-svg ml-[-8rem]">
              <Image
                className="hidden sm:block sm:top-[6em] sm:left-[-2em] 2xl:top-[0em] 2xl:left-[-6em] 2xl:w-full 2xl:h-full object-cover object-center svg-mask svg-mask-1 left-[-5em] "
                src="/home/solution-img-3.jpg"
                alt="solutionImg"
                width={500}
                height={500}
              />
              <Image
                className="hidden sm:block object-cover object-center absolute sm:w-[200px] sm:h-[200px] xl:w-[12em] xl:h-[12em] xl:top-[65%] xl:left-[73%] 2xl:w-[280px] 2xl:h-[280px] 2xl:top-[50%] 2xl:left-[50%] custom-translate-1 z-10"
                src="/home/polygon-icon.svg"
                alt="solutionImg"
                width={500}
                height={500}
              />
            </div>
            <div className="hidden sm:block test-square-svg square-svg-1 mr-[10rem] z-10 2xl:mr-[5rem]">
              <Image
                className="hidden sm:block object-cover sm:w-[12em] sm:h-[12em] sm:top-[7em] sm:left-[4em] xl:w-[10em] xl:h-[10em] xl:top-[4em] 2xl:w-[15em] 2xl:h-[15em] rounded-[25px] rotate-[3deg] scale-x-[-1] relative ml-[18em]"
                src="/home/solution-img-4.jpg"
                alt="solutionImg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
