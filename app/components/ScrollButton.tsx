"use client";
import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ScrollButton() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPosition = () => {
    if (hasScrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      onClick={scrollToPosition}
      className="fixed bottom-8 right-8 z-50 flex text-white items-center bg-[#FF0000]/50 border border-[#FF0000]/40 hover:bg-red-500 p-4 transition-all duration-300 rounded-full mb-4 uppercase text-xs"
    >
      {hasScrolled ? (
        <>
          <ChevronUp className="w-4 h-4" />
        </>
      ) : (
        <>
          <ChevronDown className="w-4 h-4" />
        </>
      )}
    </a>
  );
}
