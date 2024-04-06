import { createAction } from '@reduxjs/toolkit';
import { City, OfferCardType, UserData } from '../types';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeCity = createAction('app/changeCity', (city: City) => ({payload: city}));

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const fillOffers = createAction('offers/fillOffers');

export const loadOffers = createAction<OfferCardType[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const setAuthorizationStatus = createAction('user/setAuthorizationStatus', (status: AuthorizationStatus) => ({payload: status}));

export const setUserData = createAction('user/setUserData', (data: UserData | null) => ({payload: data}));
