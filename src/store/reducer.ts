import { createReducer } from '@reduxjs/toolkit';
import { OFFER_CARDS } from '../mocks/offers';
import { changeCity, loadDetailedOffer, loadNearbyOffers, loadOffers, loadReviews, setAuthorizationStatus, setOffersDataLoadingStatus, setUserData } from './actions';
import { City, Offer, OfferCardType, ReviewType, UserData } from '../types';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';

type State = {
  userData: UserData | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  city: City;
  offers: OfferCardType[];
  detailedOffer: Offer | null;
  reviews: ReviewType[];
  nearbyOffers: OfferCardType[];
}

export const initialState: State = {
  userData: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  city: CITIES_LOCATION.Paris,
  offers: OFFER_CARDS,
  detailedOffer: null,
  reviews: [],
  nearbyOffers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadDetailedOffer, (state, action) => {
      state.detailedOffer = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
