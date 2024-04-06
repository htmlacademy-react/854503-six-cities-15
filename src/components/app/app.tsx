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
import OfferPage from '../../pages/offer-page/offer-page';
import { OFFERS } from '../../mocks/offers';
import { sortOffersByCity } from '../../common/utils';

type AppComponentProps = {
  offerCards: OfferCardType[];
  offers: Offer[];
}

export default function App({offerCards, offers}: AppComponentProps): JSX.Element {
  const offersAmount = offers.length;
  const cardsSortedByCity = sortOffersByCity(offerCards);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root}>
            <Route
              index
              element={<MainPage offersAmount={offersAmount} offerCards={offerCards}/>}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authStatus={AuthorizationStatus.Auth}>
                  <FavoritesPage cardsSortedByCity={cardsSortedByCity}/>
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={<OfferPage offers={OFFERS} />}
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
