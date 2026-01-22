import React, { useEffect, useMemo, useRef, useState } from "react";

const GLITCH = "abcdefghijklmnopqrstuvwxyz!?:;@#$%&";

const TextScramble = ({
  children,
  delay = 0,
  revealDuration = 800,
  className = "",
}) => {
  const text = typeof children === "string" ? children : "";
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const spanRefs = useRef([]);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }, []);

  const actualDuration = isMobile ? revealDuration * 1.5 : revealDuration;
  const tickMs = isMobile ? 66 : 33;

  const chars = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    const t = setTimeout(() => setIsStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!isStarted || !text) return;

    setIsComplete(false);
    startRef.current = null;

    // Initialize spans with scrambled characters
    for (let i = 0; i < chars.length; i++) {
      const el = spanRefs.current[i];
      if (!el) continue;
      const isSpace = chars[i] === " ";
      el.textContent = isSpace ? " " : GLITCH[(Math.random() * GLITCH.length) | 0];
      el.classList.toggle("scramble-char", !isSpace);
      el.classList.toggle("revealed", false);
    }

    let last = 0;
    const perChar = actualDuration / Math.max(1, chars.length);

    const animate = (ts) => {
      if (!startRef.current) startRef.current = ts;
      if (ts - last < tickMs) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }
      last = ts;

      const elapsed = ts - startRef.current;
      const revealedCount = Math.min(chars.length, (elapsed / perChar) | 0);

      for (let i = 0; i < chars.length; i++) {
        const el = spanRefs.current[i];
        if (!el) continue;

        const ch = chars[i];
        const isSpace = ch === " ";
        const revealed = i < revealedCount || isSpace;

        if (revealed) {
          if (el.textContent !== ch) el.textContent = ch;
          el.classList.toggle("scramble-char", false);
          el.classList.toggle("revealed", true);
        } else {
          el.textContent = GLITCH[(Math.random() * GLITCH.length) | 0];
        }
      }

      if (revealedCount < chars.length) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setIsComplete(true);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isStarted, text, actualDuration, tickMs, chars]);

  return (
    <>
      <style jsx>{`
        @keyframes colorCycle {
          0% { color: rgb(190, 160, 220); }
          8% { color: rgb(210, 145, 200); }
          16% { color: rgb(225, 160, 185); }
          24% { color: rgb(230, 180, 170); }
          32% { color: rgb(225, 195, 140); }
          40% { color: rgb(215, 210, 120); }
          48% { color: rgb(185, 215, 130); }
          56% { color: rgb(155, 205, 155); }
          64% { color: rgb(140, 200, 180); }
          72% { color: rgb(140, 195, 210); }
          80% { color: rgb(150, 185, 220); }
          88% { color: rgb(175, 175, 225); }
          100% { color: rgb(190, 160, 220); }
        }
        .scramble-char {
          animation: colorCycle 0.5s linear infinite;
          will-change: color;
        }
        .scramble-wrap {
          contain: layout paint;
        }
        .revealed {
          color: inherit;
        }
        @media (max-width: 768px) {
          .scramble-char {
            animation: none;
            color: rgb(107, 114, 128);
          }
        }
      `}</style>

      <span
        className={`scramble-wrap ${className}`}
        style={{ opacity: isStarted ? 1 : 0, transition: "opacity 0.15s ease-out" }}
      >
        {chars.map((ch, i) => (
          <span
            key={i}
            ref={(el) => (spanRefs.current[i] = el)}
            style={{ animationDelay: `${-i * 0.05}s` }}
          >
            {ch === " " ? " " : ""}
          </span>
        ))}
      </span>
    </>
  );
};

export default TextScramble;
