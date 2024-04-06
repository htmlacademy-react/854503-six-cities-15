import { createAction } from '@reduxjs/toolkit';
import { City } from '../types';

export const changeCity = createAction('changeCity', (city: City) => ({payload: city}));

export const fillOffers = createAction('fillOffers');

export const sortForCurrentCity = createAction('sortForCurrentCity');
