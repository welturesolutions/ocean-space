"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HomeBanner() {
  useEffect(() => {
    const words = ["Suresh.", "a full-stack developer.", "a book lover."];
    const textBox = document.querySelector(".text");

    // Cursor blink
    gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.8,
    });

    const masterTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    words.forEach((word) => {
      const typeTl = gsap.timeline();
      const deleteTl = gsap.timeline();
      let currentText = "";

      // Type each character using .set()
      word.split("").forEach((char) => {
        currentText += char;
        typeTl.set(
          textBox,
          {
            textContent: currentText,
          },
          "+=0.05"
        );
      });

      // Pause before deleting
      typeTl.to({}, { duration: 1.2 });

      // Delete characters one by one
      word.split("").forEach(() => {
        currentText = currentText.slice(0, -1);
        deleteTl.set(
          textBox,
          {
            textContent: currentText,
          },
          "+=0.05"
        );
      });

      masterTl.add(typeTl).add(deleteTl);
    });
  }, []);

  return (
    <div className="mx-auto xl:max-w-7xl px-[1rem] md:px-[2.5rem] xl:px-0 h-screen flex flex-col justify-center items-start gap-4">
      <h1 className="text-3xl md:text-5xl font-bold">
        Hi, I&apos;m Ocean Space
      </h1>
      <h1 className="flex items-center">
        <span className="text text-blue-600"></span>
        <span className="cursor ml-1 text-blue-600">|</span>
      </h1>
    </div>
  );
}
