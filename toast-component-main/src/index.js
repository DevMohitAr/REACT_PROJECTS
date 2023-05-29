import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from "./components/ToastProvider/ToastProvider";
import './global-styles.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
