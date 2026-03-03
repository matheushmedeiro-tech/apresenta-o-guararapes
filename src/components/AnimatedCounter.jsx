import React from 'react';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ value, suffix = '%', duration = 1400 }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = ref.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let frameId = 0;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, duration]);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}

export default AnimatedCounter;
