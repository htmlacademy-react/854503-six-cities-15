import { createReducer } from '@reduxjs/toolkit';
import { OFFER_CARDS } from '../mocks/offers';
import { changeCity, fillOffers, loadOffers, setOffersDataLoadingStatus } from './actions';
import { City, OfferCardType } from '../types';
import { AuthorizationStatus, CITIES_LOCATION } from '../const';

type State = {
  city: City;
  offers: OfferCardType[];
  currentCityOffers: OfferCardType[];
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

export const initialState: State = {
  city: CITIES_LOCATION.Paris,
  offers: [],
  currentCityOffers: [],
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
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
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
