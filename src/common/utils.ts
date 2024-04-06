import { Cities } from '../const';
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
