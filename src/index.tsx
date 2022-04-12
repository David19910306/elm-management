import React, {Suspense} from 'react';
import {createRoot} from "react-dom/client";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.scss'

createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <App/>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
