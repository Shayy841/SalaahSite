import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/fonts/NeueMachina/NeueMachina-Regular.otf';
import './assets/fonts/NeueMachina/NeueMachina-Light.otf';
import './assets/fonts/NeueMachina/NeueMachina-Ultrabold.otf';
import ThemeContextWrapper from './themeContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeContextWrapper>
);
