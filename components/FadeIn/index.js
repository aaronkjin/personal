import React, { useEffect, useState } from "react";

const DEFAULT_OFFSET = "0.75rem";
const MOBILE_DEFAULT_OFFSET = "0.5rem";
const MOBILE_DELAY_SCALE = 0.45;
const MOBILE_MAX_DURATION = 280;

const getMotionTiming = (delay, duration, offset, mobileOffset) => {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
  ) {
    return {
      delay: Math.round(delay * MOBILE_DELAY_SCALE),
      duration: Math.min(duration, MOBILE_MAX_DURATION),
      offset: mobileOffset || offset || MOBILE_DEFAULT_OFFSET,
    };
  }

  return {
    delay,
    duration,
    offset: offset || DEFAULT_OFFSET,
  };
};

const getFadeInClassName = (className, isVisible, isInline) =>
  [
    className,
    "transition-all ease-out",
    isVisible ? "opacity-100" : "opacity-0",
    !isInline && "transform",
    !isInline && (isVisible ? "translate-y-0" : "translate-y-4"),
  ]
    .filter(Boolean)
    .join(" ");

const FadeIn = ({
  children,
  delay = 0,
  duration = 500,
  offset,
  mobileOffset,
  className = "",
  as: Component = "div",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timing, setTiming] = useState(() => ({
    delay,
    duration,
    offset: DEFAULT_OFFSET,
  }));
  const isInline = Component === "span";

  useEffect(() => {
    const nextTiming = getMotionTiming(delay, duration, offset, mobileOffset);
    setTiming(nextTiming);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, nextTiming.delay);

    return () => clearTimeout(timer);
  }, [delay, duration, offset, mobileOffset]);

  return (
    <Component
      className={getFadeInClassName(className, isVisible, isInline)}
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
