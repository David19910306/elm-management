import React from 'react';
import {createRoot} from "react-dom/client";
import App from './App';
import './index.scss'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)