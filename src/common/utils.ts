import { RATING_WIDTH_STEP } from '../const';
import { OffersSortedByCities } from '../types/common';
import { OfferCardType } from '../types/offer';

export function sortOffersByCity(offerCards: OfferCardType[]): OffersSortedByCities {
  const proccessedOffers: OffersSortedByCities = {
    Paris: [],
    Cologne: [],
    Brussels: [],
    Amsterdam: [],
    Hamburg: [],
    Dusseldorf: [],
  };

  offerCards.forEach((offer: OfferCardType) => {
    proccessedOffers[offer.city.name].push(offer);
  });

  return proccessedOffers;
}

export function sortOffersByValue(offers: OfferCardType[], value: string): OfferCardType[] {
  const copy = offers.slice();

  switch (value) {
    case 'Price: low to high': {
      return copy.sort((a, b) => a.price - b.price);
    }
    case 'Price: high to low': {
      return copy.sort((a, b) => b.price - a.price);
    }
    case 'Top rated first': {
      return copy.sort((a, b) => b.rating - a.rating);
    }
    case 'Popular':
    default: return offers;
  }
}

export function getRatingWidth(rating: number): string {
  return `${RATING_WIDTH_STEP * rating}%`;
}
