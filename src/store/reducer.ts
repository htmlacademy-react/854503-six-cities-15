import { createReducer } from '@reduxjs/toolkit';
import { OFFER_CARDS } from '../mocks/offers';
import { changeCity, loadDetailedOffer, loadOffers, setAuthorizationStatus, setOffersDataLoadingStatus, setUserData } from './actions';
import { City, Offer, OfferCardType, UserData } from '../types';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';

type State = {
  userData: UserData | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  city: City;
  offers: OfferCardType[];
  detailedOffer: Offer | null;
}

export const initialState: State = {
  userData: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  city: CITIES_LOCATION.Paris,
  offers: OFFER_CARDS,
  detailedOffer: null
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
