import React from 'react';
import { Camera, Cpu, ScanSearch, Calculator, MonitorCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

// Edite este array para alterar textos e ordem do fluxograma.
const steps = [
  { icon: Camera, title: 'Captura da imagem', description: 'Registro da pilha com câmera padrão.' },
  { icon: Cpu, title: 'Processamento pelo modelo', description: 'Execução do YOLOv8 sobre a imagem.' },
  { icon: ScanSearch, title: 'Detecção das toras', description: 'Identificação individual com bounding boxes.' },
  { icon: Calculator, title: 'Contagem automática', description: 'Soma instantânea de objetos detectados.' },
  { icon: MonitorCheck, title: 'Exibição do total', description: 'Resultado final para análise operacional.' },
];

function FlowchartSection() {
  return (
    <AnimatedSection id="fluxograma">
      <div className="section-card">
        <SectionTitle
          label="Seção 4 · Fluxograma Animado"
          title="Fluxo inteligente de ponta a ponta"
          subtitle="Cada etapa abaixo entra com animação durante o scroll, simulando a jornada do dado desde a imagem até o total final."
        />

        <div className="flow">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title}>
                <article
                  className="flow-item"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="flow-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <strong>{step.title}</strong>
                    <p className="section-subtitle">{step.description}</p>
                  </div>
                </article>

                {index < steps.length - 1 ? <div className="flow-arrow">↓</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default FlowchartSection;
