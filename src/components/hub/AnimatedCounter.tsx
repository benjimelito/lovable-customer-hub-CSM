import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  format?: "number" | "abbreviated" | "percentage";
  prefix?: string;
  suffix?: string;
}

const formatNumber = (num: number, format: string): string => {
  if (format === "abbreviated") {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }
  if (format === "percentage") {
    return num.toFixed(1) + "%";
  }
  return num.toLocaleString();
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  format = "number",
  prefix = "",
  suffix = "",
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Ease out function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (value - startValue) * easeOut);
        
        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(displayValue, format)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
