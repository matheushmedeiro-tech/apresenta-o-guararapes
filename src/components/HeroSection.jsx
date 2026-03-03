import React from 'react';
import { useEffect, useState } from 'react';

function HeroSection({ onCtaClick }) {
  const [layerY, setLayerY] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const nextY = Math.min(window.scrollY * 0.18, 140);
        setLayerY(nextY);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="hero" id="capa">
      <div className="parallax-layer" style={{ transform: `translateY(${layerY}px)` }}>
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
      </div>

      <div className="hero-inner">
        <h1 className="hero-title reveal-item is-visible" style={{ '--delay': '0.05s' }}>
          Sistema Inteligente de Contagem de Toras de Madeira
        </h1>

        <p className="hero-subtitle reveal-item is-visible" style={{ '--delay': '0.12s' }}>
          Visão Computacional aplicada ao setor florestal
        </p>

        <button
          className="hero-cta"
          onClick={onCtaClick}
          style={{ animationDelay: '0.2s' }}
        >
          Ver como funciona
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
