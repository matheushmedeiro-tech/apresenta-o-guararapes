import React from 'react';
import { Brain, Bot, Database, Eye } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

const techs = [
  {
    icon: Brain,
    title: 'Python',
    text: 'Orquestração do pipeline de inferência e integração operacional.',
  },
  {
    icon: Bot,
    title: 'YOLOv8',
    text: 'Modelo de detecção para identificar toras com alta precisão.',
  },
  {
    icon: Database,
    title: 'Roboflow',
    text: 'Gestão de dataset, anotação e versionamento de treinamento.',
  },
  {
    icon: Eye,
    title: 'OpenCV',
    text: 'Pré-processamento e manipulação de imagens para visão computacional.',
  },
];

function TechnologiesSection() {
  return (
    <AnimatedSection id="tecnologias">
      <div className="section-card">
        <SectionTitle
          label="Seção 5 · Tecnologias Utilizadas"
          title="Stack robusta para uma operação confiável"
          subtitle="Combinação de ferramentas maduras para entregar desempenho, precisão e facilidade de evolução."
        />

        <div className="tech-grid">
          {techs.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <article
                key={tech.title}
                className="tech-card"
                style={{ '--delay': `${index * 0.08}s` }}
              >
                <Icon size={21} color="#7defff" />
                <h4>{tech.title}</h4>
                <p>{tech.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default TechnologiesSection;
