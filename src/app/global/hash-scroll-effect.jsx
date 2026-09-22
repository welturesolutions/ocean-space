"use client";
import { useEffect } from "react";
import { smoothScrollTo } from "../../lib/scroll-utils";

export default function HashScrollEffect({ offset = -100, duration = 1.2 }) {
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (!element) return;
      setTimeout(() => {
        smoothScrollTo(element, {
          offset,
          duration,
          easing: (t) => t,
        });
      }, 500);
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (!element) return;
      smoothScrollTo(element, {
        offset,
        duration,
        easing: (t) => t,
      });
    };

    handleInitialHash();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [offset, duration]);

  return null;
}
