import { ReactNode } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  speed?: "fast" | "normal" | "slow";
  threshold?: number;
  rootMargin?: string;
}

export function AnimatedSection({
  children,
  className = "",
  delay,
  speed = "normal",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const delayClass = delay ? `fade-bottom-delay-${delay}` : "";
  const speedClass =
    speed !== "normal" ? `fade-bottom-${speed}` : "";
  const visibleClass = isVisible ? "visible" : "";

  return (
    <div
      ref={ref}
      className={`fade-bottom ${delayClass} ${speedClass} ${visibleClass} ${className}`}
    >
      {children}
    </div>
  );
}