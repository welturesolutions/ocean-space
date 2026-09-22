"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Defer onComplete to avoid updating RootLayout during render
          setTimeout(() => {
            onComplete();
          }, 0);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // ~3s total

    // Wave animation
    const wavePath = document.querySelector("#wave-path");
    if (wavePath) {
      gsap.to(wavePath, {
        attr: {
          d: "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,234.7C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        },
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "sine.inOut",
      });
    }

    // Wave movement and background fill
    const preloader = document.querySelector(".preloader-wave");
    if (preloader) {
      gsap.to(preloader, {
        yPercent: -100, // Move wave up to fill screen
        duration: 3, // Match loading duration
        ease: "linear",
        onUpdate: function () {
          const progress = this.progress();
          // Update background color opacity without setting state
          preloader.style.backgroundColor = `rgba(0, 153, 255, ${progress})`;
        },
      });
    }

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <>
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[100px] font-geist-mono z-10 transition-colors duration-500 ${
          progress >= 25 ? "text-white" : "text-black"
        }`}
      >
        {progress}%
      </div>
      <div className="h-screen relative bg-[#0099ff]">
        <div className="preloader-wave h-full">
          <div className="w-full h-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute bottom-[-1px]"
            >
              <path
                id="wave-path"
                fill="#0099ff"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
