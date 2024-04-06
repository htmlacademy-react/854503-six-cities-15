import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoints } from '../const';
import { loadOffers, setOffersDataLoadingStatus } from './actions';
import { AppDispatch, State } from '../types/state';
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
