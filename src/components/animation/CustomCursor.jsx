// src/components/animation/CustomCursor.jsx
// Custom cursor — desktop only. Small dot + outer ring.
// Expands on interactive elements. Disabled on touch devices.

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./CustomCursor.css";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef(null);

  useEffect(() => {
    // Do not activate on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e) => {
      if (e.target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Smooth follow via rAF
    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (targetPos.current.x - prev.x) * 0.18,
        y: prev.y + (targetPos.current.y - prev.y) * 0.18,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  // Hide on touch
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className={"cursor-ring" + (isHovering ? " cursor-ring--hover" : "")}
        style={{
          left: pos.x,
          top: pos.y,
          opacity: isVisible ? 1 : 0,
        }}
        aria-hidden="true"
      />
      {/* Inner dot (follows exactly) */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      />
    </>
  );
}
