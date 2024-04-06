import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Endpoints } from '../../const';
import { ReviewType, AppDispatch, UserReview, State } from '../../types';

export const fetchReviewsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${Endpoints.Comments}/${offerId}`);

    return data;
  }
);

export const postUserReviewAction = createAsyncThunk<ReviewType, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/postUserReview',
  async (userReview, {extra: api}) => {
    const {data} = await api.post<ReviewType>(`${Endpoints.Comments}/${userReview.offerId}`, userReview.riview);

    return data;
  }
);
