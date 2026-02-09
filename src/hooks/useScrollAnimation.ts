'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1, 
  animateOut = false,
  initialVisible = false
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

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
        rootMargin: '50px 0px -10% 0px'
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
