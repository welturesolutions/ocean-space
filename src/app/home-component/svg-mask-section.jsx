"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

gsap.registerPlugin(ScrollTrigger);

export default function ClientSection() {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(() => {
      const target = document.querySelector(".svg-mask");
      if (!target) return; // Exit if element not found

      gsap.to(target, {
        scrollTrigger: {
          trigger: target,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          markers: true,
          anticipatePin: 0, // Disable anticipatePin to avoid jump
          onUpdate: (self) => {
            const progress = self.progress.toFixed(2);
            const size = 40 + progress * 200; // Scale mask from 40% to 240%
            const maskSize = `${size}%`;
            target.style.webkitMaskSize = maskSize;
            target.style.maskSize = maskSize;
          },
        },
      });
    }, 300); // Increased delay to sync with preloader

    // Refresh ScrollTrigger on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="svg-mask h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="./ocean-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-screen bg-black flex items-center justify-center button-wave">
        <a href="#">
          <span>Button</span>
          <div className="wave"></div>
        </a>
      </div>
      <div className="h-full flex items-center justify-center py-[10em]">
        <PhoneInput
          defaultCountry="my" // Static default country
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
      </div>
    </>
  );
}
