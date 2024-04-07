import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer, OfferCardType, OffersProcess } from '../../types';
import { addOfferToFavoriteAction, fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOfferDataAction, fetchOffersAction } from './offers-process.thunks';

const initialState: OffersProcess = {
  isOffersDataLoading: false,
  isOffersDataUpdating: false,
  offers: [],
  detailedOffer: null,
  nearbyOffers: [],
  favoriteOffers: []
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
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action: PayloadAction<OfferCardType[]>) => {
        state.favoriteOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
      })
      .addCase(addOfferToFavoriteAction.pending, (state) => {
        state.isOffersDataUpdating = true;
      })
      .addCase(addOfferToFavoriteAction.fulfilled, (state, action: PayloadAction<Offer>) => {
        const offer = state.offers.find((item) => item.id === action.payload.id);

        if (offer) {
          offer.isFavorite = action.payload.isFavorite;

          if (action.payload.isFavorite) {
            state.favoriteOffers.push(offer);
          } else {
            const favoriteOffer = state.favoriteOffers.find((item) => item.id === action.payload.id);

            if (favoriteOffer) {
              state.favoriteOffers = state.favoriteOffers.filter((item) => item.id !== favoriteOffer.id);
            }
          }
        }

        state.detailedOffer = action.payload;
        state.isOffersDataUpdating = false;
      })
      .addCase(addOfferToFavoriteAction.rejected, (state) => {
        state.isOffersDataUpdating = false;
      });
  }
});

export const { setOffersDataLoadingStatus } = offersProcess.actions;
