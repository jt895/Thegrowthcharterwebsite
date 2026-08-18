import { useEffect, useRef } from "react";

/**
 * Reveal-on-scroll. Adds the "visible" class to the returned ref's element
 * once it comes into view, pairing with the .reveal/.reveal.visible CSS in
 * index.css.
 *
 * That CSS sets opacity: 0 by default, so anything that stops this hook from
 * firing leaves real content permanently invisible with no way to recover.
 * That is the failure behind sections (the product pages' "suppliers"
 * paragraph among them) intermittently never appearing. Three changes close
 * it off:
 *
 *  - threshold 0 instead of a ratio. A ratio-based threshold cannot be
 *    satisfied at all by an element taller than viewportHeight / threshold,
 *    so a long section on a short viewport was a standing failure case at the
 *    old 0.06-0.12 thresholds. The bottom rootMargin, not the ratio, is what
 *    holds the trigger until the section has properly arrived, and it behaves
 *    the same at any height.
 *  - An immediate check at mount, so anything already on screen (above the
 *    fold, a short page, a deep link) never waits on the observer at all.
 *  - A passive scroll/resize backstop, so a section still reveals if its
 *    observer callback never arrives. Unlike a timed fallback this keeps the
 *    reveal tied to actually scrolling, rather than flipping the whole page
 *    visible after N seconds whether or not the reader has got there.
 */

// Bias the trigger point up the viewport a little so a section animates in as
// it properly arrives rather than the instant its first pixel appears.
const VIEWPORT_BIAS = 0.92;
const ROOT_MARGIN = "0px 0px -8% 0px";

function isInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewportHeight * VIEWPORT_BIAS && rect.bottom > 0;
}

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("visible");

    if (isInView(el) || typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    let done = false;
    const onScroll = () => { if (isInView(el)) finish(); };

    const finish = () => {
      if (done) return;
      done = true;
      reveal();
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) finish(); },
      { threshold: 0, rootMargin: ROOT_MARGIN }
    );
    observer.observe(el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return ref;
}
