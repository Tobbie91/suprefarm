
import { createRoot } from 'react-dom/client'; // ✅ named import
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing');

createRoot(container).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
