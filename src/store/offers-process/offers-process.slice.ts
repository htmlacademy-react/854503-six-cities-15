import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer, OfferCardType, OffersProcess } from '../../types';
import { fetchNearbyOffersAction, fetchOfferDataAction, fetchOffersAction } from './offers-process.thunks';

const initialState: OffersProcess = {
  isOffersDataLoading: false,
  offers: [],
  detailedOffer: null,
  nearbyOffers: []
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setOffersDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersDataLoading = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<OfferCardType[]>) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferDataAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOfferDataAction.fulfilled, (state, action: PayloadAction<Offer>) => {
        state.detailedOffer = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferDataAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action: PayloadAction<OfferCardType[]>) => {
        state.nearbyOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      });
  }
});

export const { setOffersDataLoadingStatus } = offersProcess.actions;