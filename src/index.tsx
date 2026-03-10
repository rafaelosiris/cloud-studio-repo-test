import React from 'react';
import ReactDOM from 'react-dom/client';
// Resolved: CSS is handled by index.html for instant Static Bootstrap and to avoid resolution errors
import App from './app/root';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
