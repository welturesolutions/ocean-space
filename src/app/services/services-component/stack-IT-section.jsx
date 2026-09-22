"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default function StackITSection() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const cardsData = [
    {
      id: 1,
      image: "/services/IT-Support-Helpdesk.jpg",
      alt: "IT-Support-Helpdesk",
      title: "IT Support & Helpdesk",
      description:
        "Is IT holding you back? Downtime and tech issues hurt productivity and waste resources. Our expert support ensures smooth operations, less downtime, and greater peace of mind.",
      features: [
        {
          icon: "/services/IT-icon-1.svg",
          text: "24/7 Support",
          bgColor: "bg-[#D9FFFD]",
        },
        {
          icon: "/services/IT-icon-2.svg",
          text: "Tech Support",
          bgColor: "bg-[#DFFFDE]",
        },
        {
          icon: "/services/IT-icon-3.svg",
          text: "Server Monitoring",
          bgColor: "bg-[#E1EDFF]",
        },
      ],
    },
    {
      id: 2,
      image: "/services/Cloud.jpg",
      alt: "Cloud",
      title: "Cloud & Infrastructure Management",
      description:
        "Struggling with outdated systems, slow performance, or data security risks? Take control of your IT infrastructure with scalable, secure, and future-ready solutions.",
      features: [
        {
          icon: "/services/cloud-icon-1.svg",
          text: "Cloud Migration",
          bgColor: "bg-[#D9FFFD]",
        },
        {
          icon: "/services/cloud-icon-2.svg",
          text: "Server Management",
          bgColor: "bg-[#DFFFDE]",
        },
        {
          icon: "/services/cloud-icon-3.svg",
          text: "Backup Solutions",
          bgColor: "bg-[#E1EDFF]",
        },
      ],
    },
    {
      id: 3,
      image: "/services/support.jpg",
      alt: "Support",
      title: "Cybersecurity Solutions",
      description:
        "Worried about cyber threats, data breaches, or compliance issues? Stay ahead of risks with proactive, robust protection tailored to your needs.",
      features: [
        {
          icon: "/services/support-icon-1.svg",
          text: "Threat Detection",
          bgColor: "bg-[#D9FFFD]",
        },
        {
          icon: "/services/support-icon-2.svg",
          text: "Data Security",
          bgColor: "bg-[#DFFFDE]",
        },
        {
          icon: "/services/support-icon-3.svg",
          text: "Risk Assessments",
          bgColor: "bg-[#E1EDFF]",
        },
      ],
    },
    {
      id: 4,
      image: "/services/Back-Office.jpg",
      alt: "backOffice",
      title: "Back-Office IT Solutions",
      description:
        "Overwhelmed by manual tasks, inefficient workflows, or unmanaged IT assets? Streamline your operations with tech-driven back-office support.",
      features: [
        {
          icon: "/services/back-office-icon-1.svg",
          text: "Asset Management",
          bgColor: "bg-[#D9FFFD]",
        },
        {
          icon: "/services/back-office-icon-2.svg",
          text: "Process Automation",
          bgColor: "bg-[#DFFFDE]",
        },
        {
          icon: "/services/back-office-icon-3.svg",
          text: "Data Processing",
          bgColor: "bg-[#E1EDFF]",
        },
      ],
    },
    {
      id: 5,
      image: "/services/Helpdesk.jpg",
      alt: "Helpdesk",
      title: "AI & Digital Transformation",
      description:
        "Falling behind in innovation or struggling to make data-driven decisions? Unlock growth and efficiency with cutting-edge AI and digital tools.",
      features: [
        {
          icon: "/services/helpdesk-icon-1.svg",
          text: "AI-powered Chatbots",
          bgColor: "bg-[#D9FFFD]",
        },
        {
          icon: "/services/helpdesk-icon-2.svg",
          text: "RPA Solutions",
          bgColor: "bg-[#DFFFDE]",
        },
        {
          icon: "/services/helpdesk-icon-3.svg",
          text: "Data Analytics",
          bgColor: "bg-[#E1EDFF]",
        },
      ],
    },
  ];

  // Check if screen is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1195); // Use 1024px as breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // GSAP animations for desktop only
  useEffect(() => {
    if (isMobile) return; // Skip GSAP on mobile

    const cards = cardsRef.current;
    if (!cards.length) return;

    const spacer = 20;
    const minScale = 0.8;
    const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

    cards.forEach((card, index) => {
      if (!card) return;

      const scaleVal = distributor(index, card, cards);
      const initialTop = 80 + index * spacer; // Start at 80px for first card, increment by spacer

      // Set initial top position
      gsap.set(card, { top: initialTop });

      // Animation for scale
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top top`,
          scrub: true,
          invalidateOnRefresh: true,
          markers: false,
        },
        ease: "none",
        scale: scaleVal,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top`,
        endTrigger: sectionRef.current,
        end: `bottom top+=${700 + cards.length * spacer}`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
        markers: false,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  // Card component for reuse
  const CardComponent = ({ card, index, isDesktop = false }) => (
    <motion.div
      className={`xl:grid ${
        isDesktop
          ? "grid-cols-[45%_auto]"
          : "grid-cols-1 md:grid-cols-[45%_auto]"
      } gap-[3em] bg-white p-[20px] xl:p-[25px] rounded-[25px] xl:rounded-[30px] card-shadow items-center ${
        isDesktop ? "h-auto" : "h-full"
      }`}
      style={isDesktop ? { position: "relative" } : {}}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Image
        className={`w-full ${
          isDesktop ? "h-[500px]" : "h-[300px] mb-[30px]"
        } object-cover rounded-[25px] xl:rounded-[30px]`}
        src={card.image}
        alt={card.alt}
        width={1000}
        height={1000}
      />
      <div className={`${isDesktop ? "w-[90%]" : " w-full md:w-[90%]"}`}>
        <h4
          className={`font-[600] mb-[25px] ${
            isDesktop ? "" : "text-[24px] md:text-[28px]"
          }`}
        >
          {card.title}
        </h4>
        <p
          className={`text-[#555E6E] ${
            isDesktop ? "!text-[18px]" : "text-[16px] md:text-[18px]"
          } mb-[35px]`}
        >
          {card.description}
        </p>
        <div
          className={`hidden xl:grid ${
            isDesktop ? "grid-cols-3" : "grid-cols-1 sm:grid-cols-3"
          } gap-[15px] text-center`}
        >
          {card.features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="bg-white rounded-[10px] p-[20px] border-[1px] border-[#E8E8E8] flex flex-col items-center"
            >
              <Image
                className={`w-[50px] h-[50px] p-[10px] ${feature.bgColor} rounded-[15px] mb-[20px]`}
                src={feature.icon}
                alt={`${card.title} Icon`}
                width={100}
                height={100}
              />
              <p
                className={`text-[#0A0D14] font-[600] ${
                  isDesktop ? "!text-[18px]" : "text-[16px] md:text-[18px]"
                }`}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <div className="bg-[#F6F8FA] rounded-t-[40px] -mt-[3em]" ref={sectionRef}>
        <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem] py-[5em] md:py-[8em] xl:pb-[15em] xl:pt-[5em]">
          {isMobile ? (
            // Mobile: Swiper Slider
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{
                clickable: true,
                // dynamicBullets: true,
                className: "swiper-pagination-custom",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                },
              }}
              className="services-swiper"
            >
              {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                  <CardComponent card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Desktop: GSAP ScrollTrigger
            <div className="flex flex-col gap-[20px]">
              {cardsData.map((card, index) => (
                <div
                  key={card.id}
                  className="sticky top-0 mb-0 card"
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <CardComponent card={card} index={index} isDesktop={true} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
