import React from 'react';
import {createRoot} from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ReactDOM from 'react-dom';

//var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
//const container = document.getElementById('App');
//const root = createRoot(container);
//root.render(element);
//ReactDOM.render(element, document.getElementById('root'));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();