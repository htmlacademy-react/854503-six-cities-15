import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS, OFFER_CARDS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCards={OFFER_CARDS} offers={OFFERS} reviews={REVIEWS} />
  </React.StrictMode>
);
