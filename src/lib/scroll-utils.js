/**
 * Global scroll utility functions for consistent smooth scrolling behavior
 */

/**
 * Smooth scroll to a specific element or position
 * @param {HTMLElement|number} target - Element to scroll to or scroll position
 * @param {Object} options - Scroll options
 * @param {number} options.offset - Offset from target (default: 0)
 * @param {number} options.duration - Animation duration (default: 1.2)
 * @param {Function} options.easing - Easing function (default: linear)
 * @param {boolean} options.useLenis - Force use of Lenis (default: auto-detect)
 */
export const smoothScrollTo = (target, options = {}) => {
  const {
    offset = 0,
    duration = 1.2,
    easing = (t) => t,
    useLenis = null,
  } = options;

  const isDesktop = window.matchMedia("(min-width: 1300px)").matches;
  const shouldUseLenis =
    useLenis !== null ? useLenis : isDesktop && window.lenis;

  if (shouldUseLenis) {
    // Use Lenis smooth scroll
    if (typeof target === "number") {
      // Scroll to specific position
      window.lenis.scrollTo(target, {
        duration,
        easing,
        offset,
      });
    } else if (target && typeof target.scrollIntoView === "function") {
      // Scroll to element
      window.lenis.scrollTo(target, {
        duration,
        easing,
        offset,
      });
    }
  } else {
    // Use native scroll
    if (typeof target === "number") {
      // Scroll to specific position
      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    } else if (target && typeof target.scrollIntoView === "function") {
      // Scroll to element
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
};

/**
 * Smooth scroll to top of page
 * @param {Object} options - Scroll options
 */
export const scrollToTop = (options = {}) => {
  smoothScrollTo(0, options);
};

/**
 * Smooth scroll to element by ID
 * @param {string} id - Element ID
 * @param {Object} options - Scroll options
 */
export const scrollToId = (id, options = {}) => {
  const element = document.getElementById(id);
  if (element) {
    smoothScrollTo(element, options);
  }
};

/**
 * Smooth scroll to element by selector
 * @param {string} selector - CSS selector
 * @param {Object} options - Scroll options
 */
export const scrollToSelector = (selector, options = {}) => {
  const element = document.querySelector(selector);
  if (element) {
    smoothScrollTo(element, options);
  }
};

/**
 * Check if Lenis is available and initialized
 * @returns {boolean}
 */
export const isLenisAvailable = () => {
  return typeof window !== "undefined" && window.lenis;
};

/**
 * Get current scroll position
 * @returns {number}
 */
export const getScrollPosition = () => {
  if (isLenisAvailable()) {
    return window.lenis.scroll;
  }
  return window.scrollY || window.pageYOffset;
};
