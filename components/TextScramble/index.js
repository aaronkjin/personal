import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";

const TextScramble = ({ 
  children, 
  delay = 0, 
  revealDuration = 1500,
  colorCycleSpeed = 50,
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState("");
  const [charColors, setCharColors] = useState([]);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);
  const colorFrameRef = useRef(null);
  
  const glitchChars ="abcdefghijklmnopqrstuvwxyz!?:;@#$%&";
  
  const text = typeof children === "string" ? children : "";

  const gradientColors = useMemo(() => [
    { r: 160, g: 120, b: 200 },
    { r: 180, g: 100, b: 180 },
    { r: 200, g: 120, b: 160 },
    { r: 210, g: 150, b: 140 },
    { r: 200, g: 170, b: 100 },
    { r: 190, g: 190, b: 80 },
    { r: 150, g: 190, b: 90 },
    { r: 120, g: 180, b: 120 },
    { r: 100, g: 175, b: 150 },
    { r: 100, g: 165, b: 185 },
    { r: 110, g: 155, b: 200 },
    { r: 140, g: 140, b: 210 },
  ], []);

  const getRandomChar = useCallback(() => {
    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
  }, [glitchChars]);

  const getGradientColor = useCallback((t) => {
    const numColors = gradientColors.length;
    const scaledT = t * (numColors - 1);
    const index = Math.floor(scaledT);
    const fraction = scaledT - index;
    
    const c1 = gradientColors[Math.min(index, numColors - 1)];
    const c2 = gradientColors[Math.min(index + 1, numColors - 1)];
    
    return {
      r: Math.round(c1.r + (c2.r - c1.r) * fraction),
      g: Math.round(c1.g + (c2.g - c1.g) * fraction),
      b: Math.round(c1.b + (c2.b - c1.b) * fraction),
    };
  }, [gradientColors]);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  // Color cycling animation
  useEffect(() => {
    if (!isStarted || isComplete || !text) return;

    let colorOffset = 0;
    const textLength = text.length;
    
    const animateColors = () => {
      colorOffset += 0.01; // Speed of color cycling
      
      const newColors = [];
      for (let i = 0; i < textLength; i++) {
        const phase = (colorOffset + i * 0.15) % 1;
        const color = getGradientColor(phase);
        newColors.push(`rgb(${color.r}, ${color.g}, ${color.b})`);
      }
      
      setCharColors(newColors);
      colorFrameRef.current = requestAnimationFrame(animateColors);
    };
    
    colorFrameRef.current = requestAnimationFrame(animateColors);
    
    return () => {
      if (colorFrameRef.current) {
        cancelAnimationFrame(colorFrameRef.current);
      }
    };
  }, [isStarted, isComplete, text, getGradientColor]);

  // Text reveal animation
  useEffect(() => {
    if (!isStarted || !text) return;

    const textLength = text.length;
    const charRevealDuration = revealDuration / textLength;
    
    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      
      const revealedCount = Math.min(
        textLength,
        Math.floor(elapsed / charRevealDuration)
      );
      
      // Build the display text
      let result = "";
      for (let i = 0; i < textLength; i++) {
        const char = text[i];
        
        if (i < revealedCount) {
          // Fully revealed
          result += char;
        } else if (char === " ") {
          // Keep spaces
          result += " ";
        } else {
          // Scramble with glitch characters
          result += getRandomChar();
        }
      }
      
      setDisplayText(result);
      
      if (revealedCount < textLength) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setDisplayText(text);
        setIsComplete(true);
        setCharColors([]);
      }
    };

    // Initialize with scrambled text
    let initialText = "";
    for (let i = 0; i < textLength; i++) {
      const char = text[i];
      if (char === " ") {
        initialText += " ";
      } else {
        initialText += getRandomChar();
      }
    }
    setDisplayText(initialText);
    
    // Small delay before starting the reveal animation
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

  // Render with per-character coloring
  const renderText = () => {
    if (isComplete || charColors.length === 0) {
      return displayText || text;
    }
    
    return displayText.split("").map((char, index) => {
      const isRevealed = index < text.length && char === text[index] && char !== " ";
      const isSpace = char === " ";
      
      return (
        <span
          key={index}
          style={{
            color: isRevealed || isSpace ? "inherit" : (charColors[index] || "inherit"),
            transition: isRevealed ? "color 0.15s ease-out" : "none",
          }}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <span 
      className={className}
      style={{
        opacity: isStarted ? 1 : 0,
        transition: "opacity 0.15s ease-out",
      }}
    >
      {renderText()}
    </span>
  );
};

export default TextScramble;
