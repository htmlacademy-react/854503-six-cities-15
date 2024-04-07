import { RATING_WIDTH_STEP } from '../const';
import { ReviewType } from '../types';
import { OffersSortedByCities } from '../types/common';
import { OfferCardType } from '../types/offer';

export function sortOffersByCity(offerCards: OfferCardType[]): OffersSortedByCities {
  const processedOffers: OffersSortedByCities = {
    Paris: [],
    Cologne: [],
    Brussels: [],
    Amsterdam: [],
    Hamburg: [],
    Dusseldorf: [],
  };

  offerCards.forEach((offer: OfferCardType) => {
    processedOffers[offer.city.name].push(offer);
  });

  return processedOffers;
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
  return `${RATING_WIDTH_STEP * Math.round(rating)}%`;
}

export function capitalized(word: string): string {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

export function sortReviewByDate(reviews: ReviewType[]): ReviewType[] {
  const sorted = reviews.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return sorted;
}

export function getRandomInt(a: number, b: number): number {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
}
