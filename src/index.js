import React from 'react';
import ReactDOM from 'react-dom';
import { ShowPersonApp } from './ShowPersonApp';
import './index.css';
import { ThemeProvider } from './context';

//inicializar la aplicacion tomando el componente padre
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ShowPersonApp />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

