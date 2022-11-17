import './_setup/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRoot } from './_setup/AppRoot';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);
