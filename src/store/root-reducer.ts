import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cityData } from './city/city.slice';

export const rootReducer = combineReducers({
  [NameSpace.CityData]: cityData.reducer
});
