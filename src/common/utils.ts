import { Cities, RATING_WIDTH_STEP } from '../const';
import { SortedCards } from '../types/common';
import { OfferCardType } from '../types/offer';

export function sortOffersByCity(offerCards: OfferCardType[]): SortedCards<typeof Cities> {
  const proccessedOffers: SortedCards<typeof Cities> = {};

  offerCards.forEach((offer: OfferCardType) => {
    if (!proccessedOffers[offer.city.name]) {
      proccessedOffers[offer.city.name] = [offer];
    } else {
      proccessedOffers[offer.city.name]!.push(offer);
    }
  });

  return proccessedOffers;
}

export function sortOffersByValue(offers: OfferCardType[], value: string) {
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
