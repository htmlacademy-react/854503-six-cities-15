import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthorizationStatus, Endpoints } from '../const';
import { loadOffers, setAuthorizationStatus, setOffersDataLoadingStatus } from './actions';
import { AppDispatch, State, UserData } from '../types';
import { AxiosInstance } from 'axios';
import { OfferCardType, AuthData } from '../types';
import { saveToken } from '../services/token';

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

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(Endpoints.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
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
      await api.get(Endpoints.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);
