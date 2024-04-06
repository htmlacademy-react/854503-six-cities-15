import { createReducer } from '@reduxjs/toolkit';
import { loadReviews, loadUserReview } from './actions';
import { ReviewType } from '../types';

type State = {
  reviews: ReviewType[];
}

export const initialState: State = {
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadUserReview, (state, action) => {
      state.reviews.push(action.payload);
    });
});
