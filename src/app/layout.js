"use client";
import { Nunito_Sans, IBM_Plex_Sans } from "next/font/google";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "./extra-style.scss";
import Header from "./global/header";
import Footer from "./global/footer";
import Lenis from "@studio-freight/lenis";
import DisableRightClick from "./global/disable-right-click";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Check if the screen width is above 1300px
    const isDesktop = window.matchMedia("(min-width: 1300px)").matches;

    let lenis = null;

    // Initialize Lenis only on desktop
    if (isDesktop) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => t,
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.1,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } else {
      // Ensure native scrolling on mobile
      document.body.style.overflow = "auto";
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${
          ibmPlexSans.variable
        } antialiased ${pathname === "/contact-us" ? "contactus" : ""}`}
      >
        <Header />
        {children}
        <Footer />
        <DisableRightClick />
      </body>
    </html>
  );
}
