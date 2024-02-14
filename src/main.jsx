import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Router from './components/Router';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
