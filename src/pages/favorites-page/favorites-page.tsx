import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import FavoritesList from '../../components/favofites-list/favorites-list';
import { Cities } from '../../const';
import { SortedCards } from '../../types/common';

type FavoritesPageProps = {
  cardsSortedByCity: SortedCards<typeof Cities>;
}

export default function FavoritesPage({cardsSortedByCity}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <PageHeader isPlain={false} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList cardsSortedByCity={cardsSortedByCity} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}
