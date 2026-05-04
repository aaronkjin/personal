import React, { useEffect, useState } from "react";

const FadeIn = ({
  children,
  delay = 0,
  duration = 500,
  className = "",
  as: Component = "div",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isInline = Component === "span";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

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
        top: isInline ? (isVisible ? "0" : "0.75rem") : undefined,
        transitionDelay: isInline ? "0ms" : `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Component>
  );
};

export default FadeIn;
