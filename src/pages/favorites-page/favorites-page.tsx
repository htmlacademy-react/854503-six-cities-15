import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { getFavoriteOffers } from '../../store/offers-process/offers-process.selectors';
import { useAppSelector } from '../../hooks';

export default function FavoritesPage(): JSX.Element {
  const favoriteOffersAmount = useAppSelector(getFavoriteOffers).length;

  return (
    <div className={`
      page
      ${favoriteOffersAmount === 0 && 'page--favorites-empty'}
    `}
    >
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <PageHeader isPlain={false} />
      {
        favoriteOffersAmount > 0 ? (
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList />
              </section>
            </div>
          </main>) : (
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>
            </div>
          </main>
        )
      }
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
