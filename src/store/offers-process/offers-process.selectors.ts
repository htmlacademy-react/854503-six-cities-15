import { NameSpace } from '../../const';
import { State } from '../../types';

export const getOffersDataLoading = (state: State) => state[NameSpace.Offers].isOffersDataLoading;

export const getOffers = (state: State) => state[NameSpace.Offers].offers;

export const getDetailedOffer = (state: State) => state[NameSpace.Offers].detailedOffer;

export const getNearbyOffers = (state: State) => state[NameSpace.Offers].nearbyOffers;
