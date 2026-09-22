"use client";
import { useState, useEffect } from "react";
import Navbar from "./navbar";

export default function Header({}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Apply white background and border when scrolling down
      setIsScrolled(window.scrollY > 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
}
