import { CitiesNames, OffersSortedByCities } from '../../types';
import { OfferCardType } from '../../types';
import OfferCard from '../offer-card/offer-card';

const FAVORITE_BLOCK_CLASS = 'favorites';

type FavoritesListProps = {
  offersSortedByCity: OffersSortedByCities;
}

function createFavoriteList(offersSortedByCity: OffersSortedByCities): (JSX.Element | null)[] {
  const favoriteItems: (JSX.Element | null)[] = [];

  Object.keys(offersSortedByCity).forEach((city) => {
    const item = offersSortedByCity[city as CitiesNames].length === 0 ? null : (
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
          {(offersSortedByCity[city as CitiesNames] as Array<OfferCardType>).map((offer) => (
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

export default function FavoritesList({offersSortedByCity}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      { createFavoriteList(offersSortedByCity) }
    </ul>
  );
}
