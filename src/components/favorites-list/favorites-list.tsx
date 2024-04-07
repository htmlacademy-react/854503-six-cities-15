import { useNavigate } from 'react-router-dom';
import { sortOffersByCity } from '../../common/utils';
import { AppRoute, CITIES_LOCATION, OFFER_CARD_IMAGE_SIZE } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offers-process/offers-process.selectors';
import { CitiesNames, OffersSortedByCities } from '../../types';
import { OfferCardType } from '../../types';
import {MemoOfferCard as OfferCard} from '../offer-card/offer-card';
import { MouseEvent } from 'react';
import { changeCity } from '../../store/city/city.slice';

const FAVORITE_BLOCK_CLASS = 'favorites';

function createFavoriteList(
  offersSortedByCity: OffersSortedByCities,
  handleLinkClick: (evt: MouseEvent<HTMLAnchorElement>, location: string) => void,
): (JSX.Element | null)[] {
  const favoriteItems: (JSX.Element | null)[] = [];

  Object.keys(offersSortedByCity).forEach((city) => {


    const item = offersSortedByCity[city as CitiesNames].length === 0 ? null : (
      <li
        className="favorites__locations-items"
        key={city}
      >
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a
              onClick={(evt) => handleLinkClick(evt, city)}
              className="locations__item-link"
            >
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {(offersSortedByCity[city as CitiesNames] as Array<OfferCardType>).map((offer) => (
            <OfferCard
              offerCard={offer}
              blockClass={FAVORITE_BLOCK_CLASS}
              imageSize={OFFER_CARD_IMAGE_SIZE}
              key={offer.id}
            />))}
        </div>
      </li>
    );

    favoriteItems.push(item);
  });

  return favoriteItems;
}

export default function FavoritesList(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const offersSortedByCity: OffersSortedByCities = sortOffersByCity(favoriteOffers);

  function handleLinkClick(evt: MouseEvent<HTMLAnchorElement>, location: string): void {
    evt.preventDefault();

    dispatch(changeCity(CITIES_LOCATION[location as CitiesNames]));
    navigate(AppRoute.Root);
  }

  return (
    <ul className="favorites__list">
      { createFavoriteList(offersSortedByCity, handleLinkClick) }
    </ul>
  );
}
