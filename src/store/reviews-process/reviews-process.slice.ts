import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ReviewType, ReviewsProcess } from '../../types';
import { fetchReviewsAction, postUserReviewAction } from './reviews-process.thunks';

const initialState: ReviewsProcess = {
  isReviewsDataLoading: false,
  isUserReviewLoading: false,
  isSucceeded: true,
  reviews: []
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action: PayloadAction<ReviewType[]>) => {
        state.reviews = action.payload;
        state.isReviewsDataLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsDataLoading = false;
      })
      .addCase(postUserReviewAction.pending, (state) => {
        state.isUserReviewLoading = true;
        state.isSucceeded = false;
      })
      .addCase(postUserReviewAction.fulfilled, (state, action: PayloadAction<ReviewType>) => {
        state.reviews.push(action.payload);
        state.isUserReviewLoading = false;
        state.isSucceeded = true;
      })
      .addCase(postUserReviewAction.rejected, (state) => {
        state.isUserReviewLoading = false;
        state.isSucceeded = false;
      });
  }
});
