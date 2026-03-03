import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

const nextSteps = [
  'Treinar o modelo com base de imagens reais da operação.',
  'Integrar painel web com histórico de contagens e auditoria.',
  'Validar desempenho em diferentes condições de iluminação.',
  'Expandir para monitoramento em tempo real por câmera fixa.',
];

function NextStepsSection() {
  return (
    <AnimatedSection id="proximos-passos" className="final-section">
      <div className="section-card">
        <SectionTitle
          label="Seção 7 · Próximos Passos"
          title="Evolução contínua da solução"
          subtitle="Roadmap de implementação para consolidar o sistema em escala industrial."
        />

        <ul className="steps-list">
          {nextSteps.map((step, index) => (
            <li
              key={step}
              style={{ '--delay': `${index * 0.08}s` }}
            >
              <span className="steps-index">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}

export default NextStepsSection;
