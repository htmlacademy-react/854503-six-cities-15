import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { PrivateRoute } from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { HelmetProvider } from 'react-helmet-async';
import { Offer, OfferCardType } from '../../types';
import OfferPage from '../../pages/offer-page/offer-page';
import { sortOffersByCity } from '../../common/utils';
import { ReviewType } from '../../types';
import withMap from '../../hocs/with-map/with-map';

type AppComponentProps = {
  offerCards: OfferCardType[];
  offers: Offer[];
  reviews: ReviewType[];
}

const OfferPageWrapped = withMap(OfferPage);
const MainPageWrapped = withMap(MainPage);

export default function App({offerCards, offers, reviews}: AppComponentProps): JSX.Element {
  const offersAmount = offers.length;
  const cardsSortedByCity = sortOffersByCity(offerCards);
  const defaultCityLocation = offerCards[0].city.location;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root}>
            <Route
              index
              element={
                <MainPageWrapped
                  offersAmount={offersAmount}
                  offerCards={offerCards}
                  defaultCityLocation={defaultCityLocation}
                />
              }
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
              element={
                <OfferPageWrapped
                  city={defaultCityLocation}
                  offers={offers}
                  reviews={reviews}
                />
              }
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
