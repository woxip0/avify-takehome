import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import reportWebVitals from './reportWebVitals';


document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById("reactMountPoint") as HTMLElement);
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
});

reportWebVitals(console.log);
