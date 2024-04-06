import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from '../const';
import { loadDetailedOffer, loadNearbyOffers, loadOffers, loadReviews, loadUserReview, setOffersDataLoadingStatus } from './actions';
import { AppDispatch, Offer, ReviewType, State, UserReview } from '../types';
import { AxiosInstance } from 'axios';
import { OfferCardType } from '../types';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));

    const {data} = await api.get<OfferCardType[]>(Endpoints.Offers);

    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchOfferDataAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferData',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(`${Endpoints.Offers}/${offerId}`);

    dispatch(loadDetailedOffer(data));
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferData',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferCardType[]>(`${Endpoints.Offers}/${offerId}/nearby`);

    dispatch(loadNearbyOffers(data));
  }
);

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
