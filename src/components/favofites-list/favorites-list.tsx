import { CitiesNames, SortedCardsByCityType } from '../../types';
import { OfferCardType } from '../../types';
import OfferCard from '../offer-card/offer-card';

const FAVORITE_BLOCK_CLASS = 'favorites';

type FavoritesListProps = {
  cardsSortedByCity: SortedCardsByCityType;
}

function createFavoriteList(cardsSortedByCity: SortedCardsByCityType): JSX.Element[] {
  const favoriteItems: JSX.Element[] = [];

  Object.keys(cardsSortedByCity).forEach((city) => {
    const item = cardsSortedByCity[city].length === 0 ? null : (
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
          {(cardsSortedByCity[city as CitiesNames] as Array<OfferCardType>).map((offer) => (
            <OfferCard
              offerCard={offer}
              blockClass={FAVORITE_BLOCK_CLASS}
              imageSize={{
                width: 150,
                height: 110
              }}
              key={offer.id}
            />))}
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
