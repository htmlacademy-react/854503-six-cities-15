import { createReducer } from '@reduxjs/toolkit';
import { OFFER_CARDS } from '../mocks/offers';
import { loadDetailedOffer, loadNearbyOffers, loadOffers, loadReviews, loadUserReview, setOffersDataLoadingStatus } from './actions';
import { Offer, OfferCardType, ReviewType } from '../types';

type State = {
  isOffersDataLoading: boolean;
  offers: OfferCardType[];
  detailedOffer: Offer | null;
  reviews: ReviewType[];
  nearbyOffers: OfferCardType[];
}

export const initialState: State = {
  isOffersDataLoading: false,
  offers: OFFER_CARDS,
  detailedOffer: null,
  reviews: [],
  nearbyOffers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
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
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadUserReview, (state, action) => {
      state.reviews.push(action.payload);
    });
});
