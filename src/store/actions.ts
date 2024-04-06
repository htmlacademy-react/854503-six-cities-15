import { createAction } from '@reduxjs/toolkit';
import { City, Offer, OfferCardType, UserData } from '../types';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeCity = createAction('app/changeCity', (city: City) => ({payload: city}));

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadDetailedOffer = createAction('offers/loadDetailedOffer', (offer: Offer) => ({payload: offer}));

export const loadOffers = createAction<OfferCardType[]>('offers/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const setAuthorizationStatus = createAction('user/setAuthorizationStatus', (status: AuthorizationStatus) => ({payload: status}));

export const setUserData = createAction('user/setUserData', (data: UserData | null) => ({payload: data}));
