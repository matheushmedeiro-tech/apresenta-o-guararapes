import React from 'react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

function SolutionSection() {
  return (
    <AnimatedSection id="solucao">
      <div className="section-card grid-2">
        <div>
          <SectionTitle
            label="Seção 3 · A Solução"
            title="Automação da contagem com visão computacional"
            subtitle="O sistema analisa imagens de toras e executa a detecção em tempo real, entregando quantidade total de forma consistente e escalável."
          />

          <ul className="lead-list">
            <li>YOLOv8 para detecção robusta de objetos.</li>
            <li>Python como base de processamento e integração.</li>
            <li>Detecção por bounding box para individualização das toras.</li>
            <li>Contagem automática com saída pronta para operação.</li>
          </ul>
        </div>

        <figure className="image-block">
          <span className="image-tag image-tag-auto">Com um clique</span>
          <img
            className="placeholder-image"
            src="/images/com-um-clique.png"
            alt="Detecção automática de toras com bounding boxes"
            loading="lazy"
          />
          <figcaption>
            Resultado automatizado: detecção por IA e total instantâneo com rastreabilidade.
          </figcaption>
        </figure>
      </div>
    </AnimatedSection>
  );
}

export default SolutionSection;
