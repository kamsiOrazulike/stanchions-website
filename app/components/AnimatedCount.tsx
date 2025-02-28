import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedCounter component that counts up to a target number when scrolled into view
 *
 * @param {Object} props Component props
 * @param {number|string} props.endValue The final value to count up to
 * @param {string} props.prefix Optional prefix to add before the number (e.g., "$")
 * @param {string} props.suffix Optional suffix to add after the number (e.g., "+")
 * @param {string} props.className Additional CSS classes to apply to the component
 * @param {number} props.duration Animation duration in seconds (default: 2)
 * @param {boolean} props.useCommas Whether to format numbers with commas (default: false)
 */
interface AnimatedCounterProps {
  endValue: number | string;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  useCommas?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  prefix = "",
  suffix = "",
  className = "",
  duration = 2,
  useCommas = false,
}) => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const counterElement = counterRef.current;

    let finalValue = endValue;
    if (typeof endValue === "string") {
      finalValue = parseFloat(endValue.replace(/[^\d.-]/g, ""));
    }

    const counter = { value: 0 };
    const updateCounter = () => {
      const value = counter.value;
      const formattedValue = useCommas
        ? Math.floor(value).toLocaleString()
        : value.toFixed(0);

      if (counterElement) {
        counterElement.textContent = `${prefix}${formattedValue}${suffix}`;
      }
    };

    ScrollTrigger.create({
      trigger: counterElement,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: finalValue,
          duration: duration,
          ease: "power2.out",
          onUpdate: updateCounter,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === counterElement) {
          trigger.kill();
        }
      });
    };
  }, [endValue, prefix, suffix, duration, useCommas]);

  return (
    <span ref={counterRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default AnimatedCounter;
