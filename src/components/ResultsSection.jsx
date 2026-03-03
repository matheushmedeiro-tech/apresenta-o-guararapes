import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';
import AnimatedCounter from './AnimatedCounter';

// Ajuste os valores para refletir seus resultados reais.
const metrics = [
  { label: 'Redução de erro', value: 85, suffix: '%' },
  { label: 'Aumento de velocidade', value: 70, suffix: '%' },
  { label: 'Escalabilidade', value: 100, suffix: '%' },
];

function ResultsSection() {
  return (
    <AnimatedSection id="resultados">
      <div className="section-card">
        <SectionTitle
          label="Seção 6 · Resultados Esperados"
          title="Ganhos operacionais simulados"
          subtitle="Indicadores estimados com base na automação do processo de contagem e padronização do método."
        />

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className="metric"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default ResultsSection;
