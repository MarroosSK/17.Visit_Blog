import { useState, useEffect } from "react";

export const useScrollTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollUp = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);

    return () => removeEventListener("scroll", scrollUp);
  }, []);

  return { isScrolled };
};
