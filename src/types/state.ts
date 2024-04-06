import { City, Offer, OfferCardType, ReviewType, UserData } from '.';
import { AuthorizationStatus } from '../const';
import { store } from '../store';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CityData = {
  city: City;
}

export type UserProcess = {
  userData: UserData | null;
  authorizationStatus: AuthorizationStatus;
}

export type OffersProcess = {
  isOffersDataLoading: boolean;
  offers: OfferCardType[];
  detailedOffer: Offer | null;
  nearbyOffers: OfferCardType[];
}

export type ReviewsProcess = {
  isReviewsDataLoading: boolean;
  reviews: ReviewType[];
}
