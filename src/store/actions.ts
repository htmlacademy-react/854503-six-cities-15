import { createAction } from '@reduxjs/toolkit';
import { ReviewType } from '../types';
import { AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadReviews = createAction('reviews/loadReviews', (reviews: ReviewType[]) => ({payload: reviews}));

export const loadUserReview = createAction('reviews/loadUserReview', (review: ReviewType) => ({payload: review}));
