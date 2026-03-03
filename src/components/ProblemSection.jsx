import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

function ProblemSection() {
  return (
    <AnimatedSection id="problema">
      <div className="section-card grid-2">
        <figure className="image-block">
          <span className="image-tag image-tag-manual">Processo manual</span>
          <img
            className="placeholder-image"
            src="/images/processo-manual.png"
            alt="Contagem manual de toras de madeira"
            loading="lazy"
          />
          <figcaption>
            Cenário atual: contagem visual humana, suscetível a erros e retrabalho.
          </figcaption>
        </figure>

        <div>
          <SectionTitle
            label="Seção 2 · O Problema"
            title="A contagem manual limita produtividade e precisão"
            subtitle="No cenário atual, o processo ainda depende de avaliação humana em campo, o que aumenta a variabilidade dos resultados e impacta decisões operacionais."
          />

          <ul className="lead-list">
            <li>Contagem manual gera erros frequentes em grandes volumes.</li>
            <li>Processo demorado, com gargalo em operações de pátio e expedição.</li>
            <li>Falta de padronização entre equipes, turnos e unidades.</li>
            <li>Cada medição exige esforço repetitivo e validação manual posterior.</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default ProblemSection;
