import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cityData } from './city/city.slice';
import { userProcess } from './user-process/user-process.slice';
import { offersProcess } from './offers-process/offers-process.slice';
import { reviewsProcess } from './reviews-process/reviews-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.CityData]: cityData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.Reviews]: reviewsProcess.reducer
});
