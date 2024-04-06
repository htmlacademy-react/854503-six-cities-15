import { createReducer } from '@reduxjs/toolkit';
import { OFFER_CARDS } from '../mocks/offers';
import { changeCity, fillOffers } from './actions';
import { SortedCards } from '../types';
import { sortOffersByCity } from '../common/utils';
import { Cities } from '../const';

export const initialState = {
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
  },
  offers: [...OFFER_CARDS]
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state) => {
      const filteredCities: SortedCards<typeof Cities> = sortOffersByCity(OFFER_CARDS);

      if (filteredCities[state.city.name as keyof typeof Cities]) {
        state.offers = filteredCities[state.city.name as keyof typeof Cities]!;
      } else {
        state.offers = [];
      }
    });
});
