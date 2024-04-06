import { createReducer } from '@reduxjs/toolkit';
import { OFFER_CARDS } from '../mocks/offers';
import { changeCity, fillOffers, sortForCurrentCity } from './actions';
import { CitiesNames, City, OfferCardType, SortedCards } from '../types';
import { sortOffersByCity } from '../common/utils';
import { CITIES_LOCATION, Cities } from '../const';

type State = {
  city: City;
  offers: OfferCardType[];
  currentCityOffers: OfferCardType[] | undefined;
}

export const initialState: State = {
  city: CITIES_LOCATION.Paris,
  offers: [],
  currentCityOffers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state) => {
      state.offers = [...OFFER_CARDS];
    })
    .addCase(sortForCurrentCity, (state) => {
      const sortedCities: SortedCards<typeof Cities> = sortOffersByCity(state.offers);

      if (sortedCities[state.city.name as CitiesNames]) {
        state.currentCityOffers = sortedCities[state.city.name as CitiesNames]!;
      } else {
        state.currentCityOffers = [];
      }
    });
});
