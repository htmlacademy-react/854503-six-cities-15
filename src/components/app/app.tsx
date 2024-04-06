import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { PrivateRoute } from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { HelmetProvider } from 'react-helmet-async';
import { Offer, OfferCardType } from '../../types/offer';

type AppComponentProps = {
  offersCards: OfferCardType[];
  offers: Offer[];
}

export default function App({offersCards, offers}: AppComponentProps): JSX.Element {
  const offersAmount = offers.length;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root}>
            <Route
              index
              element={<MainPage offersAmount={offersAmount} offersCards={offersCards}/>}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authStatus={AuthorizationStatus.NoAuth}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={<FavoritesPage />}
            />
          </Route>
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
