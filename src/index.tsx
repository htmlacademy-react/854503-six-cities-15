import React from 'react';
import ReactDOM from 'react-dom/client';
import { OFFERS_AMOUNT } from './const';
import App from './components/app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersAmount= {OFFERS_AMOUNT}/>
  </React.StrictMode>
);
