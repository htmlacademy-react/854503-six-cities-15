import { createAction } from '@reduxjs/toolkit';
import { Offer, OfferCardType, ReviewType } from '../types';
import { AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadDetailedOffer = createAction('offers/loadDetailedOffer', (offer: Offer) => ({payload: offer}));

export const loadOffers = createAction<OfferCardType[]>('offers/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const loadNearbyOffers = createAction('offers/loadNearbyOffers', (offers: OfferCardType[]) => ({payload: offers}));

export const loadReviews = createAction('reviews/loadReviews', (reviews: ReviewType[]) => ({payload: reviews}));

export const loadUserReview = createAction('reviews/loadUserReview', (review: ReviewType) => ({payload: review}));
