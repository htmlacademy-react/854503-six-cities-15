import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from '../const';
import { loadReviews, loadUserReview } from './actions';
import { AppDispatch, ReviewType, State, UserReview } from '../types';
import { AxiosInstance } from 'axios';

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${Endpoints.Comments}/${offerId}`);

    dispatch(loadReviews(data));
  }
);

export const postUserReviewAction = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/postUserReview',
  async (userReview, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<ReviewType>(`${Endpoints.Comments}/${userReview.offerId}`, userReview.riview);

      dispatch(loadUserReview(data));
    } catch {
      // eslint-disable-next-line no-console
      console.log('error in postUserReview');
    }
  }
);
