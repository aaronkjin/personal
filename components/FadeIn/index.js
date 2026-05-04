import React, { useEffect, useState } from "react";

const getMotionTiming = (delay, duration) => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
  ) {
    return {
      delay: Math.round(delay * 0.45),
      duration: Math.min(duration, 280),
      offset: "0.5rem",
    };
  }

  return {
    delay,
    duration,
    offset: "0.75rem",
  };
};

const FadeIn = ({
  children,
  delay = 0,
  duration = 500,
  className = "",
  as: Component = "div",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timing, setTiming] = useState(() => ({
    delay,
    duration,
    offset: "0.75rem",
  }));
  const isInline = Component === "span";

  useEffect(() => {
    const nextTiming = getMotionTiming(delay, duration);
    setTiming(nextTiming);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, nextTiming.delay);

    return () => clearTimeout(timer);
  }, [delay, duration]);

  return (
    <Component
      className={`${className} transition-all ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        } ${isInline ? "" : "transform"}`}
      style={{
        position: isInline ? "relative" : undefined,
        top: isInline ? (isVisible ? "0" : timing.offset) : undefined,
        transitionDelay: "0ms",
        transitionDuration: `${timing.duration}ms`,
      }}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
