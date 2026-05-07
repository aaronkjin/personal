import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const GLITCH = "abcdefghijklmnopqrstuvwxyz!?:;@#$%&";
const WORD_PATTERN = /(\s+|[^\s]+)/g;
const SCRAMBLE_REQUEST_EVENT = "text-scramble-request";
const SCRAMBLE_TRIGGER_COOLDOWN_MS = 650;
const TOUCH_TAP_MOVE_TOLERANCE_PX = 10;
const RANDOM_SCRAMBLE_MIN_DELAY_MS = 1000;
const RANDOM_SCRAMBLE_MAX_DELAY_MS = 4000;
const RANDOM_SCRAMBLE_SELECTOR = "[data-scramble-random-word]";

let randomScrambleTimerId = null;
let randomScrambleSubscriptionCount = 0;

const randomChar = () => GLITCH[(Math.random() * GLITCH.length) | 0];
const getSettledChars = (text) =>
  Array.from(text, (ch) => ({ ch, scrambling: false }));
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
  element?.dispatchEvent?.(new Event(SCRAMBLE_REQUEST_EVENT));
};
const getRandomScrambleDelay = () =>
  RANDOM_SCRAMBLE_MIN_DELAY_MS +
  Math.random() * (RANDOM_SCRAMBLE_MAX_DELAY_MS - RANDOM_SCRAMBLE_MIN_DELAY_MS);
const isVisibleScrambleTarget = (element) => {
  const rect = element.getBoundingClientRect();

  return (
    rect.width > 0 &&
    rect.height > 0 &&
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= window.innerHeight &&
    rect.left <= window.innerWidth
  );
};
const getRandomScrambleTarget = () => {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return null;
  }

  const candidates = Array.from(
    document.querySelectorAll(RANDOM_SCRAMBLE_SELECTOR),
  ).filter(isVisibleScrambleTarget);

  if (!candidates.length) {
    return null;
  }

  return candidates[(Math.random() * candidates.length) | 0];
};
const scheduleRandomScramble = () => {
  if (
    typeof window === "undefined" ||
    randomScrambleTimerId ||
    randomScrambleSubscriptionCount <= 0
  ) {
    return;
  }

  randomScrambleTimerId = window.setTimeout(() => {
    randomScrambleTimerId = null;
    dispatchScrambleRequest(getRandomScrambleTarget());
    scheduleRandomScramble();
  }, getRandomScrambleDelay());
};
const subscribeRandomScramble = () => {
  if (typeof window === "undefined") {
    return () => {};
  }

  randomScrambleSubscriptionCount += 1;
  scheduleRandomScramble();

  return () => {
    randomScrambleSubscriptionCount = Math.max(
      0,
      randomScrambleSubscriptionCount - 1,
    );

    if (!randomScrambleSubscriptionCount && randomScrambleTimerId) {
      window.clearTimeout(randomScrambleTimerId);
      randomScrambleTimerId = null;
    }
  };
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
    TOUCH_TAP_MOVE_TOLERANCE_PX
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
  enableRandomScramble = false,
}) => {
  const pieceRef = useRef(null);
  const lastLocalTriggerRef = useRef(0);
  const [localTriggerKey, setLocalTriggerKey] = useState(0);
  const [displayChars, setDisplayChars] = useState(() => getSettledChars(text));

  const triggerLocalScramble = useCallback(() => {
    if (!text.trim()) {
      return;
    }

    const now = performance.now();

    if (now - lastLocalTriggerRef.current < SCRAMBLE_TRIGGER_COOLDOWN_MS) {
      return;
    }

    lastLocalTriggerRef.current = now;
    setLocalTriggerKey((key) => key + 1);
  }, [text]);

  useEffect(() => {
    setDisplayChars(getSettledChars(text));
  }, [text]);

  useEffect(() => {
    const element = pieceRef.current;

    if (!element) {
      return undefined;
    }

    element.addEventListener(SCRAMBLE_REQUEST_EVENT, triggerLocalScramble);
    return () =>
      element.removeEventListener(SCRAMBLE_REQUEST_EVENT, triggerLocalScramble);
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
        }),
      );

      if (revealedCount < chars.length) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      setDisplayChars(getSettledChars(text));
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
      data-scramble-random-word={enableRandomScramble ? "" : undefined}
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
  allowRandomScramble = true,
}) => {
  const rootRef = useRef(null);
  const fullTouchStartRef = useRef(null);
  const wordTouchStartRef = useRef(null);
  const lastTouchTriggerRef = useRef(0);
  const parts = useMemo(() => flattenChildren(children), [children]);
  const isRandomScrambleEnabled =
    allowRandomScramble && (rescrambleOnHover || scrambleOnWordHover);
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

    if (now - lastTouchTriggerRef.current < SCRAMBLE_TRIGGER_COOLDOWN_MS) {
      return;
    }

    lastTouchTriggerRef.current = now;

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

  useEffect(() => {
    if (!isRandomScrambleEnabled) {
      return undefined;
    }

    return subscribeRandomScramble();
  }, [isRandomScrambleEnabled]);

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
    [rescrambleOnTouch],
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
    [rescrambleOnTouch, triggerTouchScramble],
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
    [scrambleOnWordTouch],
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
    [scrambleOnWordTouch],
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
    [scrambleOnWordTouchMove],
  );

  return (
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
                enableRandomScramble={isRandomScrambleEnabled}
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
            enableRandomScramble={isRandomScrambleEnabled}
          />
        );
      })}
    </span>
  );
};

export default TextScramble;
