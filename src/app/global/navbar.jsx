"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 0);
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastY;
          if (currentY > 120 && delta > 4) {
            setIsHidden(true);
          } else if (delta < -4) {
            setIsHidden(false);
          }
          setLastY(currentY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastY]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/about-us", name: "About" },
    { href: "/services", name: "Services" },
    { href: "/career", name: "Career" },
    { href: "/contact-us", name: "Contact" },
  ];

  // Filter out "Contact" link for desktop view
  const desktopNavLinks = navLinks.filter(
    (link) => link.href !== "/contact-us"
  );

  const showFullWidth = isScrolled;

  return (
    <header
      className={`fixed w-full z-60 px-[1rem] md:px-[2.5rem] transition-transform duration-300 ease-out ${
        isHidden
          ? "-translate-y-full xl:px-0"
          : isScrolled
          ? "translate-y-[2em] xl:translate-y-0 xl:px-0"
          : "translate-y-[2em]"
      }`}
    >
      <div
        className={`mx-auto px-[2em] md:px-[2.5rem] 2xl:px-[50px] bg-[#ffffff] ${
          showFullWidth ? "rounded-[25px] xl:rounded-none" : "rounded-[25px]"
        } menu-shadow transition-[max-width,border-radius] duration-500 ease-in-out`}
        style={{ maxWidth: showFullWidth ? "100%" : "1600px" }}
      >
        <div className="mx-auto xl:max-w-[1450px] 2xl:max-w-[1600px] flex items-center justify-between py-[10px] md:py-[20px] xl:py-[25px]">
          <Link href="/">
            <Image
              className="w-full h-[40px] object-contain xl:h-full"
              src="/home/ocean-space-logo.svg"
              alt="oceanSpaceLogo"
              width={500}
              height={500}
              priority
            />
          </Link>
          <nav className="flex items-center justify-end relative">
            {/* Burger Menu Button - Visible on mobile only */}
            <button
              className="xl:hidden z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M2.99976 1.00195L23.0002 21.0023L21.0004 23.0021L1 3.00171L2.99976 1.00195Z"
                    fill="black"
                  />
                  <path
                    d="M1 20.9999L21.0004 0.998047L23.0002 2.9978L2.99976 22.9996L1 20.9999Z"
                    fill="black"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <path
                    d="M23 4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6H23C23.5523 6 24 5.55228 24 5C24 4.44772 23.5523 4 23 4Z"
                    fill="black"
                  />
                  <path
                    d="M23 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11Z"
                    fill="black"
                  />
                  <path
                    d="M23 18H1C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18Z"
                    fill="black"
                  />
                </svg>
              )}
            </button>
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden xl:flex items-center justify-between w-full text-[#0A0D14] relative">
              <div className="flex items-center justify-between gap-[40px] relative">
                {desktopNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-[10px] menu-row font-bold py-[8px] px-[20px] rounded-[10px] ${
                      pathname === link.href
                        ? "bg-[#60CDFF33] py-[8px] px-[20px] rounded-[10px]"
                        : "hover:bg-[#60CDFF33] hover:py-[8px] hover:px-[20px] hover:rounded-[10px]"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          {/* Desktop "Get in touch" button - Hidden on mobile */}
          <div className="hidden xl:block">
            <Link
              href="/contact-us"
              className="flex items-center gap-[5px] bg-[#60CDFF] hover:opacity-[0.8] text-[#002991] py-[8px] pl-[25px] pr-[20px] rounded-[16px] btn-shadow"
            >
              Get in touch{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.1724 12.0007L8.22266 7.05093L9.63688 5.63672L16.0008 12.0007L9.63688 18.3646L8.22266 16.9504L13.1724 12.0007Z"
                  fill="#002991"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* Mobile Navigation - Smooth max-height transition */}
        <div
          className={`xl:hidden overflow-hidden z-40 transition-all duration-500 ease-in-out`}
          style={{
            maxHeight: isOpen ? "500px" : "0px", // Set a large max-height to accommodate content
          }}
        >
          <div className="flex flex-col gap-[10px] text-[16px] md:text-[20px] py-[20px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full font-[600] plexSans !text-[20px] mobile-border-gd ${
                  pathname === link.href ? "text-[#002991]" : "text-[#0A0D14]"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
