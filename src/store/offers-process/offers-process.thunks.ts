import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Endpoints } from '../../const';
import { AppDispatch, OfferCardType, Offer, State } from '../../types';

export const fetchOffersAction = createAsyncThunk<OfferCardType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferCardType[]>(Endpoints.Offers);

    return data;
  }
);

export const fetchOfferDataAction = createAsyncThunk<Offer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOfferData',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${Endpoints.Offers}/${offerId}`);

    return data;
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<OfferCardType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferCardType[]>(`${Endpoints.Offers}/${offerId}/nearby`);

    return data;
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<OfferCardType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchFavoriteOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferCardType[]>(Endpoints.Favorites);

    return data;
  }
);

export const addOfferToFavoriteAction = createAsyncThunk<Offer, {offerId: string; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/addOfferToFavorite',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<Offer>(`${Endpoints.Favorites}/${offerId}/${status}`);

    return data;
  }
);
