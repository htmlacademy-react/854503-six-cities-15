import { createAction } from '@reduxjs/toolkit';
import { City, OfferCardType } from '../types';

export const changeCity = createAction('city/changeCity', (city: City) => ({payload: city}));

export const fillOffers = createAction('offers/fillOffers');

export const loadOffers = createAction<OfferCardType[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
