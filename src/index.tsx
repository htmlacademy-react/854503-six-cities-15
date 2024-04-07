import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchFavoriteOffersAction, fetchOffersAction } from './store/offers-process/offers-process.thunks';
import { checkAuthAction } from './store/user-process/user-process.thunks';
import { AuthorizationStatus, NameSpace } from './const';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


async function initAppStore() {
  store.dispatch(fetchOffersAction());
  await store.dispatch(checkAuthAction());

  if (store.getState()[NameSpace.User].authorizationStatus === AuthorizationStatus.Auth) {
    store.dispatch(fetchFavoriteOffersAction());
  }
}

initAppStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
