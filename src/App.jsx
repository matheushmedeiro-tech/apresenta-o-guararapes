import React from 'react';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FlowchartSection from './components/FlowchartSection';
import TechnologiesSection from './components/TechnologiesSection';
import ResultsSection from './components/ResultsSection';
import NextStepsSection from './components/NextStepsSection';

function App() {
  // Controla a visibilidade do botão fixo de retorno ao topo.
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTopButton(window.scrollY > 450);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    // Navegação suave entre blocos da apresentação one-page.
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <HeroSection onCtaClick={() => scrollToSection('problema')} />
      <ProblemSection />
      <SolutionSection />
      <FlowchartSection />
      <TechnologiesSection />
      <ResultsSection />
      <NextStepsSection />

      <button
        className={`back-to-top ${showTopButton ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

export default App;
