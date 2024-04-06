import { createAction } from '@reduxjs/toolkit';
import { City, OfferCardType } from '../types';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('city/changeCity', (city: City) => ({payload: city}));

export const fillOffers = createAction('offers/fillOffers');

export const loadOffers = createAction<OfferCardType[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setAuthorizationStatus = createAction('user/setAuthorizationStatus', (status: AuthorizationStatus) => ({payload: status}));
