"use client";
import Link from "next/link";
import { useEffect } from "react";
import { smoothScrollTo } from "../../../lib/scroll-utils";

export default function PrivacyScrollLink({
  id,
  children,
  className,
  onClick,
}) {
  // Enhanced smooth scroll function using utility
  const smoothScrollToElement = (element) => {
    smoothScrollTo(element, {
      offset: -100, // Account for header height and some padding
      duration: 1.2,
      easing: (t) => t,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Find the target element
    const element = document.getElementById(id);
    if (element) {
      smoothScrollToElement(element);
    }

    // Call the parent onClick if provided
    if (onClick) onClick();
  };

  // Handle scrolling after navigation (for direct URL access)
  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          smoothScrollToElement(element);
        }, 200);
      }
    }
  }, [id]);

  return (
    <Link href={`#${id}`} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
