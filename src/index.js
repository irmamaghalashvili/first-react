import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './Assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import makeServer from './services/server';
import store from './redux/store';

if (process.env.NODE_ENV === 'development') {
  makeServer(); 
}

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
