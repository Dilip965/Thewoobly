// src/hooks/useAutoScroll.js
import { useEffect } from "react";

const useAutoScroll = () => {
  useEffect(() => {
    let scrolling = false;
    let raf;

    const handleMouseMove = (e) => {
      const windowHeight = window.innerHeight;
      const topThreshold = 100; // Top 100px
      const bottomThreshold = 100; // Bottom 100px

      if (e.clientY > windowHeight - bottomThreshold) {
        // Scroll down
        if (!scrolling) {
          scrolling = true;
          scrollPage(5); // Scroll speed down
        }
      } else if (e.clientY < topThreshold) {
        // Scroll up
        if (!scrolling) {
          scrolling = true;
          scrollPage(-5); // Scroll speed up
        }
      } else {
        scrolling = false;
        cancelAnimationFrame(raf);
      }
    };

    const scrollPage = (amount) => {
      if (!scrolling) return;
      window.scrollBy({ top: amount, behavior: "smooth" });
      raf = requestAnimationFrame(() => scrollPage(amount));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);
};

export default useAutoScroll;
