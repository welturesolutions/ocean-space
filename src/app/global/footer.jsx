"use client";
import Link from "next/link";
import Image from "next/image";
import { scrollToTop } from "../../lib/scroll-utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Enhanced function to handle scroll to top using utility
  const handleScrollToTop = () => {
    scrollToTop({
      duration: 1.2,
      easing: (t) => t,
    });
  };

  return (
    <footer>
      <div className="footer-bg bg-[#F6F8FA] relative text-[#0A0D14] border-t-[#A9A9A94D] border-t-[1px]">
        <div className="mx-auto 2xl:max-w-[1600px] px-[1rem] md:px-[2.5rem]">
          <div className="flex flex-col md:flex-row justify-between items-center py-[15px] md:py-[30px] footer-line gap-[10px] md:gap-0 contact-border">
            <p className="!text-[14px] md:!text-[16px] font-[500] order-3 md:order-1">
              Copyright © {currentYear} Ocean Space.
            </p>
            <Image
              className="w-[30px] h-[30px] object-cover order-1 md:order-2"
              src="/home/footer-logo-icon.svg"
              alt="handleSvg"
              width={100}
              height={100}
            />
            <div className="flex items-center gap-[30px] order-2 md:order-3">
              {/* <Link
                href="/privacy-policy"
                className="text-[#0A0D14] !font-[400] hover:text-[#002991] hover:underline hover:underline-offset-2"
              >
                Privacy Policy
              </Link> */}
              <Link
                href="/terms-conditions"
                className="text-[#0A0D14] !font-[400] hover:text-[#002991] hover:underline hover:underline-offset-2"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
