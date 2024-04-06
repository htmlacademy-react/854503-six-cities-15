import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, Endpoints } from '../const';
import { loadDetailedOffer, loadNearbyOffers, loadOffers, loadReviews, redirectToRoute, setAuthorizationStatus, setOffersDataLoadingStatus, setUserData } from './actions';
import { AppDispatch, Offer, ReviewType, State, UserData } from '../types';
import { AxiosInstance } from 'axios';
import { OfferCardType, AuthData } from '../types';
import { dropToken, saveToken } from '../services/token';

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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(Endpoints.Login);

      dispatch(setUserData(data));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(Endpoints.Login, {email, password});

    saveToken(data.token);
    dispatch(setUserData(data));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(Endpoints.Logout);

    dropToken();
    dispatch(setUserData(null));
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
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
