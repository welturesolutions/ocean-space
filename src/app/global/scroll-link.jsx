"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { smoothScrollTo } from "../../lib/scroll-utils";

export default function ScrollLink({ id, children, className, onClick }) {
  const router = useRouter();

  // Enhanced smooth scroll function using utility
  const smoothScrollToElement = (element) => {
    smoothScrollTo(element, {
      offset: -80, // Account for header height
      duration: 1.2,
      easing: (t) => t,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const targetPath = `/pricing#${id}`;

    // If already on /pricing, scroll to the anchor
    if (window.location.pathname === "/pricing") {
      const element = document.getElementById(id);
      if (element) {
        smoothScrollToElement(element);
      }
    } else {
      // Navigate to /pricing#id
      router.push(targetPath);
    }

    // Call the parent onClick (to close menu/submenu)
    if (onClick) onClick();
  };

  // Handle scrolling after navigation
  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          smoothScrollToElement(element);
        }, 100);
      }
    }
  }, [id]);

  return (
    <Link href={`/pricing#${id}`} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
