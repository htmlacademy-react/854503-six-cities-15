import { createReducer } from '@reduxjs/toolkit';
import { OFFER_CARDS } from '../mocks/offers';
import { changeCity, fillOffers, loadOffers, setAuthorizationStatus, setOffersDataLoadingStatus, setUserData } from './actions';
import { City, OfferCardType, UserData } from '../types';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';

type State = {
  userData: UserData | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  city: City;
  offers: OfferCardType[];
}

export const initialState: State = {
  userData: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  city: CITIES_LOCATION.Paris,
  offers: OFFER_CARDS
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state) => {
      state.offers = [...OFFER_CARDS];
    })
    .addCase(loadOffers, (state, action) => {
      // state.offers = action.payload;
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
