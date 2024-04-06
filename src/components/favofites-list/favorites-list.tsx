import { OfferCardType } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesListProps = {
  offerCards: OfferCardType[];
}

type a = {
  [index: string]: OfferCardType[];
};

function sortFavoritesByCity(offerCards: OfferCardType[]): a {
  const proccessedOffers: a = {};

  offerCards.forEach((offer: OfferCardType) => {
    if (!proccessedOffers[offer.city.name]) {
      proccessedOffers[offer.city.name] = [offer];
    } else {
      proccessedOffers[offer.city.name].push(offer);
    }
  });

  return proccessedOffers;
}

function createFavoriteList(offerCards: OfferCardType[]): JSX.Element[] {
  const sortedOffersByCity: a = sortFavoritesByCity(offerCards);
  const favoriteItems: JSX.Element[] = [];

  Object.keys(sortedOffersByCity).forEach((city) => {
    const item = (
      <li
        className="favorites__locations-items"
        key={city}
      >
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {sortedOffersByCity[city].map((offer) => <FavoriteCard offerCard={offer} key={offer.id} />)}
        </div>
      </li>
    );

    favoriteItems.push(item);
  });

  return favoriteItems;
}

export default function FavoritesList({offerCards}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      { createFavoriteList(offerCards) }
    </ul>
  );
}
