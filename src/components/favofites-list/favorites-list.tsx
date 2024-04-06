import { Cities } from '../../const';
import { SortedCardsByCityType } from '../../types/common';
import { OfferCardType } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesListProps = {
  cardsSortedByCity: SortedCardsByCityType;
}

function createFavoriteList(cardsSortedByCity: SortedCardsByCityType): JSX.Element[] {
  const favoriteItems: JSX.Element[] = [];

  Object.keys(cardsSortedByCity).forEach((city) => {
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
          {(cardsSortedByCity[city as keyof typeof Cities] as Array<OfferCardType>).map((offer) => <FavoriteCard offerCard={offer} key={offer.id} />)}
        </div>
      </li>
    );

    favoriteItems.push(item);
  });

  return favoriteItems;
}

export default function FavoritesList({cardsSortedByCity}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      { createFavoriteList(cardsSortedByCity) }
    </ul>
  );
}
