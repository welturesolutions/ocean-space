"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function CareerPosition() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1195); // Use 1024px as breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Fetch jobs from Contentful API route
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/contentful?content_type=job&limit=3"); // Limit to 3 jobs for featured section
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data?.success) {
          setJobs(Array.isArray(data.data) ? data.data : []);
        } else {
          throw new Error("Failed to load jobs");
        }
      } catch (e) {
        setError(e?.message || "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-[#002991] h-full">
      <div className="mx-auto xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] py-[5em] md:py-[8em] xl:py-[10em]">
        <motion.p className="text-center xl:text-left mb-[20px] font-[600] text-[#60CDFF]">
          OPEN POSITION
        </motion.p>
        <div className="grid xl:grid-cols-2 mb-[5em] gap-[25px] xl:gap-[10em]">
          <motion.div
            initial={{
              opacity: 0,
              y: isMobile ? 100 : 0,
              x: isMobile ? 0 : -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="font-[600] text-[14px]"
          >
            <motion.h3 className="text-white !text-[25px] text-center w-[80%] m-auto md:!text-[35px] md:w-[60%] xl:text-left xl:w-full">
              Join our team and shape <br className="hidden xl:block" />
              the future of tech
            </motion.h3>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: isMobile ? 100 : 0,
              x: isMobile ? 0 : 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
            className=""
          >
            <motion.p className="mb-[30px] text-white text-center m-auto md:w-[80%] xl:mx-0 xl:text-left">
              Join our team and shape the future of tech! Be part of a dynamic,
              forward-thinking environment where your ideas matter and
              innovation drives everything we do.
            </motion.p>
            <div className="flex justify-center xl:justify-normal">
              <Link href="/career/career-listing">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: isMobile ? 100 : 0,
                    x: isMobile ? 0 : 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: { duration: 0.8 },
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-[5px] bg-[#60CDFF] hover:!opacity-[0.8] text-[#002991] py-[8px] pl-[25px] pr-[20px] rounded-2xl btn-shadow w-max font-[700]"
                >
                  View Open Position
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
                      fill={"#002991"}
                    />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>

        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            className="career-swiper w-[100%]"
            // w-[100%] !overflow-visible
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: isMobile ? 100 : 0,
                    x: isMobile ? 0 : -100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.8 },
                  }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-[70px] career-card rounded-[30px] p-[40px] w-full mx-auto"
                >
                  <div className="flex flex-col">
                    <div className="bg-[#15CDCA] text-[#002991] py-[8px] px-[20px] rounded-[30px] w-max font-[700]">
                      <p className="text-[#0A0D14] !text-[14px] font-[600] plexSans">
                        FEATURED
                      </p>
                    </div>
                    <h3 className="!text-[25px] my-[15px] font-[600]">
                      {job?.fields?.title || "No title"}
                    </h3>
                    <p className="flex flex-row gap-[5px] !text-[18px] text-[#0A0D14] font-[400] items-center">
                      <Image
                        className="w-5 h-5 xl:w-6 xl:h-6"
                        src="/services/career-position-icon.svg"
                        alt="chatIcon"
                        width={100}
                        height={100}
                      />
                      {job?.fields?.department || "Not specified"}
                    </p>
                  </div>
                  <div>
                    <Link href={`/career/${job?.fields?.slug || "#"}`}>
                      <div className="flex items-center gap-[5px] bg-[#002991] hover:!opacity-[0.8] text-[#FFFFFF] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow w-max font-[700]">
                        Apply Now
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
                            fill={"#FFFFFF"}
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-3 gap-[20px]">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
                }}
                viewport={{ once: true }}
                className="career-bg rounded-[30px] p-[50px]"
              >
                <div className="flex flex-col mb-[5em]">
                  <div className="bg-[#15CDCA] text-[#002991] py-[8px] px-[20px] rounded-[30px] w-max font-[700]">
                    <p className="text-[#0A0D14] !text-[14px] font-[600] plexSans">
                      FEATURED
                    </p>
                  </div>
                  <h3 className="!text-[25px] my-[15px] font-[600]">
                    {job?.fields?.title || "No title"}
                  </h3>
                  <p className="flex flex-row gap-[5px] !text-[18px] text-[#0A0D14] font-[400] items-center">
                    <Image
                      className="w-5 h-5 xl:w-6 xl:h-6"
                      src="/services/career-position-icon.svg"
                      alt="chatIcon"
                      width={100}
                      height={100}
                    />
                    {job?.fields?.department || "Not specified"}
                  </p>
                </div>
                <div>
                  <Link href={`/career/${job?.fields?.slug || "#"}`}>
                    <div
                      className={`flex items-center gap-[5px] bg-[#002991] hover:!opacity-[0.8] text-[#FFFFFF] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow w-max font-[700]`}
                    >
                      Apply Now
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
                          fill={"#FFFFFF"}
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
