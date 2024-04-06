import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS, OFFER_CARDS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offerCards={OFFER_CARDS} offers={OFFERS} reviews={REVIEWS}/>
    </Provider>
  </React.StrictMode>
);
