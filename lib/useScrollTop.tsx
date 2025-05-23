import { useEffect, useState } from "react";

export function useScrollTop(): number {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY || window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize immediately
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollTop;
}
