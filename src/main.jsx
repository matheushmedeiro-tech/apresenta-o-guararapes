import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const rootElement = document.getElementById('root');

function showRuntimeError(message) {
  if (!rootElement) {
    return;
  }

  rootElement.innerHTML = `
    <div style="min-height:100vh;display:grid;place-items:center;padding:24px;background:#060b16;color:#e7f0ff;font-family:Inter,Segoe UI,Arial,sans-serif;">
      <div style="max-width:760px;border:1px solid rgba(255,255,255,0.18);border-radius:14px;padding:18px;background:rgba(15,27,48,0.85)">
        <h2 style="margin:0 0 10px;font-size:1.2rem">Erro de execução detectado</h2>
        <p style="margin:0 0 10px;color:#c9d9f4">A apresentação não carregou corretamente. Mensagem:</p>
        <pre style="white-space:pre-wrap;word-break:break-word;margin:0;color:#9be9ff">${String(message)}</pre>
      </div>
    </div>
  `;
}

window.addEventListener('error', (event) => {
  showRuntimeError(event.error?.message || event.message || 'Erro desconhecido.');
});

window.addEventListener('unhandledrejection', (event) => {
  showRuntimeError(event.reason?.message || event.reason || 'Promise rejeitada sem tratamento.');
});

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  showRuntimeError(error?.message || error);
}
