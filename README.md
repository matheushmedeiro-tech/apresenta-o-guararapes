# Apresentação Interativa - Contagem de Toras com YOLOv8

Projeto React + Vite com visual moderno, one-page scroll e animações para demonstrar uma solução de visão computacional no setor florestal.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Tema visual (inspirado na Guararapes)

O projeto usa uma identidade visual inspirada no universo da Guararapes (paleta verde/madeira e estilo corporativo), mantendo conteúdo e layout autorais.

## Deploy

### Render (já configurado)

Este projeto já está pronto para deploy no Render com o arquivo `render.yaml`.

1. Suba este projeto para um repositório no GitHub.
2. No Render, clique em **New +** → **Blueprint**.
3. Conecte sua conta GitHub e selecione o repositório.
4. O Render vai ler automaticamente o `render.yaml` e criar o serviço estático.
5. Clique em **Apply** para publicar.

Comandos usados no deploy:

- Build: `npm install && npm run build`
- Publish directory: `dist`

### Vercel (configuração adicionada)

Também é possível publicar na Vercel com o arquivo `vercel.json`:

1. Suba o projeto no GitHub.
2. Na Vercel, clique em **Add New...** → **Project**.
3. Importe o repositório e mantenha as configurações padrão de Vite.
4. Clique em **Deploy**.

Observação: o arquivo `apresentacao-offline.html` é uma versão alternativa local/offline e não é necessária para o deploy do sistema React.

## Estrutura principal

- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `src/components/`

## Personalização rápida

- Trocar textos por seção: arquivos em `src/components/`
- Alterar imagens placeholder: `ProblemSection.jsx` e `SolutionSection.jsx`
- Ajustar métricas: array `metrics` em `ResultsSection.jsx`
- Alterar etapas do fluxo: array `steps` em `FlowchartSection.jsx`
