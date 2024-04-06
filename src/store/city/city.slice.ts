import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES_LOCATION, NameSpace } from '../../const';
import { City, CityData } from '../../types';

const initialState: CityData = {
  city: CITIES_LOCATION.Paris
};

export const cityData = createSlice({
  name: NameSpace.CityData,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    }
  }
});

export const {changeCity} = cityData.actions;
