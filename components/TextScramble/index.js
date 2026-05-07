import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const GLITCH = "abcdefghijklmnopqrstuvwxyz!?:;@#$%&";
const WORD_PATTERN = /(\s+|[^\s]+)/g;
const TOUCH_SCRAMBLE_EVENT = "text-scramble-request";
const TOUCH_SCRAMBLE_COOLDOWN_MS = 650;
const TOUCH_TAP_MOVE_TOLERANCE = 10;

const randomChar = () => GLITCH[(Math.random() * GLITCH.length) | 0];
const canHoverScramble = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const canTouchScramble = (event) => {
  if (typeof window === "undefined") {
    return false;
  }

  if (event?.pointerType) {
    return event.pointerType !== "mouse";
  }

  return window.matchMedia("(hover: none), (pointer: coarse)").matches;
};
const dispatchScrambleRequest = (element) => {
  element?.dispatchEvent?.(new Event(TOUCH_SCRAMBLE_EVENT));
};
const isInteractiveTarget = (target) =>
  target?.closest?.("a, button, input, textarea, select, [role='button']");
const getPointerPoint = (event) => ({
  x: event.clientX,
  y: event.clientY,
});
const isTapGesture = (start, event) => {
  if (!start) {
    return false;
  }

  return (
    Math.hypot(event.clientX - start.x, event.clientY - start.y) <=
    TOUCH_TAP_MOVE_TOLERANCE
  );
};
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
  onPointerDown,
  onPointerUp,
  className = "",
  isWord = false,
  enableTouchBrush = false,
}) => {
  const pieceRef = useRef(null);
  const lastTouchTriggerRef = useRef(0);
  const [localTriggerKey, setLocalTriggerKey] = useState(0);
  const [displayChars, setDisplayChars] = useState(() =>
    Array.from(text, (ch) => ({ ch, scrambling: false }))
  );

  const triggerLocalScramble = useCallback(() => {
    if (!text.trim()) {
      return;
    }

    const now = performance.now();

    if (now - lastTouchTriggerRef.current < TOUCH_SCRAMBLE_COOLDOWN_MS) {
      return;
    }

    lastTouchTriggerRef.current = now;
    setLocalTriggerKey((key) => key + 1);
  }, [text]);

  useEffect(() => {
    setDisplayChars(Array.from(text, (ch) => ({ ch, scrambling: false })));
  }, [text]);

  useEffect(() => {
    const element = pieceRef.current;

    if (!element) {
      return undefined;
    }

    element.addEventListener(TOUCH_SCRAMBLE_EVENT, triggerLocalScramble);
    return () =>
      element.removeEventListener(TOUCH_SCRAMBLE_EVENT, triggerLocalScramble);
  }, [triggerLocalScramble]);

  useEffect(() => {
    if ((!triggerKey && !localTriggerKey) || !text.trim()) {
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
  }, [duration, localTriggerKey, mobileDuration, text, triggerKey]);

  return (
    <span
      ref={pieceRef}
      className={className}
      onMouseEnter={onMouseEnter}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      aria-label={text}
      data-scramble-word={isWord ? "" : undefined}
      data-scramble-brush-word={enableTouchBrush ? "" : undefined}
    >
      <span className="scramble-placeholder" aria-hidden="true">
        {text}
      </span>
      <span className="scramble-animated" aria-hidden="true">
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
  rescrambleOnTouch = false,
  scrambleOnMount = false,
  scrambleOnWordHover = false,
  scrambleOnWordTouch = false,
  scrambleOnWordTouchMove = false,
}) => {
  const rootRef = useRef(null);
  const fullTouchStartRef = useRef(null);
  const wordTouchStartRef = useRef(null);
  const lastFullTouchTriggerRef = useRef(0);
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

  const triggerTouchScramble = useCallback(() => {
    const now = performance.now();

    if (now - lastFullTouchTriggerRef.current < TOUCH_SCRAMBLE_COOLDOWN_MS) {
      return;
    }

    lastFullTouchTriggerRef.current = now;

    if (scrambleOnWordHover) {
      rootRef.current
        ?.querySelectorAll("[data-scramble-word]")
        .forEach(dispatchScrambleRequest);
      return;
    }

    triggerFullScramble();
  }, [scrambleOnWordHover, triggerFullScramble]);

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

  const handlePointerDown = useCallback(
    (event) => {
      if (
        !rescrambleOnTouch ||
        !canTouchScramble(event) ||
        isInteractiveTarget(event.target)
      ) {
        return;
      }

      fullTouchStartRef.current = getPointerPoint(event);
    },
    [rescrambleOnTouch]
  );

  const handlePointerUp = useCallback(
    (event) => {
      const start = fullTouchStartRef.current;
      fullTouchStartRef.current = null;

      if (
        !rescrambleOnTouch ||
        !canTouchScramble(event) ||
        isInteractiveTarget(event.target) ||
        !isTapGesture(start, event)
      ) {
        return;
      }

      triggerTouchScramble();
    },
    [rescrambleOnTouch, triggerTouchScramble]
  );

  const handleWordPointerDown = useCallback(
    (event) => {
      if (
        !scrambleOnWordTouch ||
        !canTouchScramble(event) ||
        isInteractiveTarget(event.target)
      ) {
        return;
      }

      wordTouchStartRef.current = {
        ...getPointerPoint(event),
        target: event.currentTarget,
      };
    },
    [scrambleOnWordTouch]
  );

  const handleWordPointerUp = useCallback(
    (event) => {
      const start = wordTouchStartRef.current;
      wordTouchStartRef.current = null;

      if (
        !scrambleOnWordTouch ||
        !canTouchScramble(event) ||
        isInteractiveTarget(event.target) ||
        !isTapGesture(start, event)
      ) {
        return;
      }

      dispatchScrambleRequest(start.target || event.currentTarget);
    },
    [scrambleOnWordTouch]
  );

  const handleWordPointerMove = useCallback(
    (event) => {
      if (!scrambleOnWordTouchMove || !canTouchScramble(event)) {
        return;
      }

      const target = document.elementFromPoint(event.clientX, event.clientY);

      if (isInteractiveTarget(target)) {
        return;
      }

      dispatchScrambleRequest(target?.closest?.("[data-scramble-brush-word]"));
    },
    [scrambleOnWordTouchMove]
  );

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
        .scramble-placeholder,
        .scramble-animated,
        .scramble-letter {
          font-family: inherit;
        }

        .scramble-piece {
          display: inline-block;
          position: relative;
          white-space: pre;
        }

        .scramble-placeholder {
          visibility: hidden;
        }

        .scramble-animated {
          left: 0;
          position: absolute;
          top: 0;
          white-space: pre;
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
        ref={rootRef}
        className={`scramble-text ${className}`}
        onMouseEnter={handleMouseEnter}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handleWordPointerMove}
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
                  isWord
                  enableTouchBrush={scrambleOnWordTouchMove}
                  onMouseEnter={() => triggerWordScramble(key)}
                  onPointerDown={
                    scrambleOnWordTouch ? handleWordPointerDown : undefined
                  }
                  onPointerUp={
                    scrambleOnWordTouch ? handleWordPointerUp : undefined
                  }
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
