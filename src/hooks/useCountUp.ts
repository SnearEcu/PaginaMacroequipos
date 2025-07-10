import { useState, useEffect } from 'react';

interface UseCountUpProps {
  target: number;
  duration?: number;
  shouldStart?: boolean;
}

export const useCountUp = ({ target, duration = 2000, shouldStart = true }: UseCountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = target;
    let lastValue = 0;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function para que el contador sea más suave
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      // Solo actualizar si el valor cambió para evitar re-renders innecesarios
      if (currentValue !== lastValue) {
        setCount(currentValue);
        lastValue = currentValue;
      }

      if (progress >= 1) {
        clearInterval(timer);
        setCount(endValue);
      }
    }, 50); // Reducido a 20fps para menos titileo

    return () => clearInterval(timer);
  }, [target, duration, shouldStart]);

  return count;
}; 