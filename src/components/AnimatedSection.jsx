import React from 'react';
import { useEffect, useRef, useState } from 'react';

function AnimatedSection({ id, children, className = '' }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.22 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </section>
  );
}

export default AnimatedSection;
