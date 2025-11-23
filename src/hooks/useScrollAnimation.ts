'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1, animateOut = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animate in when entering viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        // Animate out when leaving viewport (if enabled)
        else if (animateOut) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        // Add margin to detect earlier when elements are leaving/entering
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, animateOut]);

  return { ref, isVisible };
}
