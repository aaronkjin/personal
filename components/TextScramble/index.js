import React, { useEffect, useState, useRef, useCallback } from "react";

const TextScramble = ({ 
  children, 
  delay = 0, 
  revealDuration = 800,
  className = "" 
}) => {
  const [displayChars, setDisplayChars] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);
  
  const glitchChars = "abcdefghijklmnopqrstuvwxyz!?:;@#$%&";
  
  const text = typeof children === "string" ? children : "";

  const getRandomChar = useCallback(() => {
    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
  }, [glitchChars]);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted || !text) return;

    const textLength = text.length;
    const charRevealDuration = revealDuration / textLength;
    
    let lastUpdateTime = 0;
    const updateInterval = 33; // ~30fps
    
    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      
      if (timestamp - lastUpdateTime < updateInterval) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastUpdateTime = timestamp;
      
      const revealedCount = Math.min(
        textLength,
        Math.floor(elapsed / charRevealDuration)
      );
      
      const chars = [];
      for (let i = 0; i < textLength; i++) {
        const originalChar = text[i];
        const isRevealed = i < revealedCount;
        const isSpace = originalChar === " ";
        
        chars.push({
          char: isRevealed || isSpace ? originalChar : getRandomChar(),
          isRevealed,
          isSpace,
          index: i,
        });
      }
      
      setDisplayChars(chars);
      
      if (revealedCount < textLength) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setIsComplete(true);
      }
    };

    const initialChars = [];
    for (let i = 0; i < textLength; i++) {
      const char = text[i];
      const isSpace = char === " ";
      initialChars.push({
        char: isSpace ? " " : getRandomChar(),
        isRevealed: false,
        isSpace,
        index: i,
      });
    }
    setDisplayChars(initialChars);
    
    const animationDelay = setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate);
    }, 50);

    return () => {
      clearTimeout(animationDelay);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isStarted, text, revealDuration, getRandomChar]);

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
        }
      `}</style>
      <span 
        className={className}
        style={{
          opacity: isStarted ? 1 : 0,
          transition: "opacity 0.15s ease-out",
        }}
      >
        {displayChars.map(({ char, isRevealed, isSpace, index }) => (
          <span
            key={index}
            className={!isRevealed && !isSpace && !isComplete ? "scramble-char" : ""}
            style={{
              animationDelay: `${-index * 0.05}s`,
              color: isRevealed || isSpace || isComplete ? "inherit" : undefined,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </>
  );
};

export default TextScramble;
