import React, { useCallback, useEffect, useMemo, useState } from "react";

const GLITCH = "abcdefghijklmnopqrstuvwxyz!?:;@#$%&";
const WORD_PATTERN = /(\s+|[^\s]+)/g;

const randomChar = () => GLITCH[(Math.random() * GLITCH.length) | 0];
const canHoverScramble = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(min-width: 768px)").matches;
const getScrambleDuration = (duration, mobileDuration) => {
  if (
    typeof window !== "undefined" &&
    mobileDuration !== undefined &&
    window.matchMedia("(max-width: 767px)").matches
  ) {
    return mobileDuration;
  }

  return duration;
};

const flattenChildren = (children) => {
  const parts = [];

  const visit = (node) => {
    if (node === null || node === undefined || typeof node === "boolean") {
      return;
    }

    if (typeof node === "string" || typeof node === "number") {
      parts.push({ type: "text", text: String(node) });
      return;
    }

    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }

    if (!React.isValidElement(node)) {
      return;
    }

    const { children: elementChildren, ...props } = node.props;

    if (node.type === "a") {
      parts.push({
        type: "link",
        props,
        text: flattenChildren(elementChildren)
          .map((part) => part.text)
          .join(""),
      });
      return;
    }

    visit(elementChildren);
  };

  visit(children);
  return parts;
};

const splitWords = (text) => text.match(WORD_PATTERN) || [];

const ScramblePiece = ({
  text,
  triggerKey,
  duration,
  mobileDuration,
  onMouseEnter,
  className = "",
}) => {
  const [displayChars, setDisplayChars] = useState(() =>
    Array.from(text, (ch) => ({ ch, scrambling: false }))
  );

  useEffect(() => {
    setDisplayChars(Array.from(text, (ch) => ({ ch, scrambling: false })));
  }, [text]);

  useEffect(() => {
    if (!triggerKey || !text.trim()) {
      return;
    }

    let rafId = null;
    let startTime = null;
    let lastTick = 0;
    const chars = text.split("");
    const actualDuration = getScrambleDuration(duration, mobileDuration);
    const perChar = actualDuration / Math.max(1, chars.length);

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      if (timestamp - lastTick < 33) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      lastTick = timestamp;
      const elapsed = timestamp - startTime;
      const revealedCount = Math.min(chars.length, (elapsed / perChar) | 0);

      setDisplayChars(
        chars.map((ch, index) => {
          const isSpace = ch === " ";
          const revealed = index < revealedCount || isSpace;

          return {
            ch: revealed ? ch : randomChar(),
            scrambling: !revealed && !isSpace,
          };
        })
      );

      if (revealedCount < chars.length) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      setDisplayChars(chars.map((ch) => ({ ch, scrambling: false })));
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [duration, mobileDuration, text, triggerKey]);

  return (
    <span className={className} onMouseEnter={onMouseEnter}>
      {displayChars.map(({ ch, scrambling }, index) => (
        <span
          key={index}
          className={`scramble-letter ${scrambling ? "scramble-char" : ""}`}
          style={{ animationDelay: `${-index * 0.05}s` }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
};

const TextScramble = ({
  children,
  delay = 0,
  revealDuration = 600,
  mobileRevealDuration,
  className = "",
  rescrambleOnHover = false,
  scrambleOnMount = false,
  scrambleOnWordHover = false,
}) => {
  const parts = useMemo(() => flattenChildren(children), [children]);
  const [triggerKey, setTriggerKey] = useState(0);
  const [wordTriggerKeys, setWordTriggerKeys] = useState({});

  const triggerFullScramble = useCallback(() => {
    setTriggerKey((key) => key + 1);
  }, []);

  const triggerWordScramble = useCallback((key) => {
    if (!canHoverScramble()) {
      return;
    }

    setWordTriggerKeys((keys) => ({
      ...keys,
      [key]: (keys[key] || 0) + 1,
    }));
  }, []);

  useEffect(() => {
    if (!scrambleOnMount) {
      return undefined;
    }

    const timeoutId = setTimeout(triggerFullScramble, delay);
    return () => clearTimeout(timeoutId);
  }, [delay, scrambleOnMount, triggerFullScramble]);

  const handleMouseEnter = useCallback(() => {
    if (!rescrambleOnHover || scrambleOnWordHover || !canHoverScramble()) {
      return;
    }

    triggerFullScramble();
  }, [rescrambleOnHover, scrambleOnWordHover, triggerFullScramble]);

  return (
    <>
      <style jsx global>{`
        @keyframes colorCycle {
          0% {
            color: rgb(190, 160, 220);
          }
          8% {
            color: rgb(210, 145, 200);
          }
          16% {
            color: rgb(225, 160, 185);
          }
          24% {
            color: rgb(230, 180, 170);
          }
          32% {
            color: rgb(225, 195, 140);
          }
          40% {
            color: rgb(215, 210, 120);
          }
          48% {
            color: rgb(185, 215, 130);
          }
          56% {
            color: rgb(155, 205, 155);
          }
          64% {
            color: rgb(140, 200, 180);
          }
          72% {
            color: rgb(140, 195, 210);
          }
          80% {
            color: rgb(150, 185, 220);
          }
          88% {
            color: rgb(175, 175, 225);
          }
          100% {
            color: rgb(190, 160, 220);
          }
        }

        .scramble-text,
        .scramble-piece,
        .scramble-letter {
          font-family: inherit;
        }

        .scramble-char {
          animation: colorCycle 0.5s linear infinite;
          will-change: color;
        }

        .scramble-word {
          cursor: default;
        }

        @media (max-width: 768px) {
          .scramble-char {
            animation: colorCycle 0.45s linear infinite;
          }
        }
      `}</style>

      <span
        className={`scramble-text ${className}`}
        onMouseEnter={handleMouseEnter}
      >
        {parts.map((part, partIndex) => {
          if (part.type === "link") {
            return (
              <a key={partIndex} {...part.props}>
                {part.text}
              </a>
            );
          }

          if (scrambleOnWordHover) {
            return splitWords(part.text).map((word, wordIndex) => {
              const key = `${partIndex}-${wordIndex}`;

              if (!word.trim()) {
                return <React.Fragment key={key}>{word}</React.Fragment>;
              }

              return (
                <ScramblePiece
                  key={key}
                  text={word}
                  triggerKey={wordTriggerKeys[key] || 0}
                  duration={revealDuration}
                  mobileDuration={mobileRevealDuration}
                  className="scramble-piece scramble-word"
                  onMouseEnter={() => triggerWordScramble(key)}
                />
              );
            });
          }

          return (
            <ScramblePiece
              key={partIndex}
              text={part.text}
              triggerKey={triggerKey}
              duration={revealDuration}
              mobileDuration={mobileRevealDuration}
              className="scramble-piece"
            />
          );
        })}
      </span>
    </>
  );
};

export default TextScramble;
