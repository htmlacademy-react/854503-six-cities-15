import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cityData } from './city/city.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.CityData]: cityData.reducer,
  [NameSpace.User]: userProcess.reducer
});
