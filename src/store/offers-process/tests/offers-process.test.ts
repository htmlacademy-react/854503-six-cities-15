import { makeFakeDetailedOffer, makeFakeOffer } from '../../../common/test-utils';
import { clearFavoriteOffers, offersProcess, setOffersDataLoadingStatus } from '../offers-process.slice';
import { changeOfferFavoriteStatusAction, fetchFavoriteOffersAction, fetchNearbyOffersAction, fetchOfferDataAction, fetchOffersAction } from '../offers-process.thunks';

describe('OffersProcess Slice', () => {
  const initialState = {
    isOffersDataLoading: false,
    isOffersDataUpdating: false,
    offers: [],
    detailedOffer: null,
    nearbyOffers: [],
    favoriteOffers: []
  };

  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};

    const result = offersProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};

    const result = offersProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should set "isOffersDataLoading" to "true" with "setOffersDataLoadingStatus"', () => {
    const expectedState = {
      ...initialState,
      isOffersDataLoading: true
    };

    const result = offersProcess.reducer(undefined, setOffersDataLoadingStatus(true));

    expect(result).toEqual(expectedState);
  });

  it('should set "favoriteOffers" to empty array with "clearFavoriteOffers"', () => {
    const expectedState = {
      ...initialState,
      favoriteOffers: []
    };

    const result = offersProcess.reducer(undefined, clearFavoriteOffers);

    expect(result).toEqual(expectedState);
  });

  describe('Offers Actions', () => {
    it('should set "isOffersDataLoading" to "true" with "fetchOffersAction.pending"', () => {
      const expectedState = {
        ...initialState,
        isOffersDataLoading: true
      };

      const result = offersProcess.reducer(undefined, fetchOffersAction.pending);

      expect(result).toEqual(expectedState);
    });

    it('should set "isOffersDataLoading" to "false", fill "offers" with "fetchOffersAction.fulfilled"', () => {
      const mockOffer = makeFakeOffer();
      const expectedState = {
        ...initialState,
        isOffersDataLoading: false,
        offers: [mockOffer]
      };

      const result = offersProcess.reducer(undefined, fetchOffersAction.fulfilled([mockOffer], '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should set "isOffersDataLoading" to "false" with "fetchOffersAction.rejected"', () => {
      const expectedState = {
        ...initialState,
        isOffersDataLoading: false
      };

      const result = offersProcess.reducer(undefined, fetchOffersAction.rejected);

      expect(result).toEqual(expectedState);
    });
  });

  it('should fill "detailedOffer" with "fetchOfferDataAction.fulfilled"', () => {
    const mockOffer = makeFakeDetailedOffer();
    const expectedState = {
      ...initialState,
      detailedOffer: mockOffer
    };

    const result = offersProcess.reducer(undefined, fetchOfferDataAction.fulfilled(mockOffer, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should fill "nearbyOffers" with "fetchNearbyOffersAction.fulfilled"', () => {
    const mockOffer = makeFakeOffer();
    const expectedState = {
      ...initialState,
      nearbyOffers: [mockOffer]
    };

    const result = offersProcess.reducer(undefined, fetchNearbyOffersAction.fulfilled([mockOffer], '', ''));

    expect(result).toEqual(expectedState);
  });

  describe('Favorite Offers', () => {
    it('should set "isOffersDataLoading" to "true" with "fetchFavoriteOffersAction.pending"', () => {
      const expectedState = {
        ...initialState,
        isOffersDataLoading: true
      };

      const result = offersProcess.reducer(undefined, fetchFavoriteOffersAction.pending);

      expect(result).toEqual(expectedState);
    });

    it('should set "isOffersDataLoading" to "false", fill "favoriteOffers" with "fetchFavoriteOffersAction.fulfilled"', () => {
      const mockOffer = makeFakeOffer();
      const expectedState = {
        ...initialState,
        isOffersDataLoading: false,
        favoriteOffers: [mockOffer]
      };

      const result = offersProcess.reducer(undefined, fetchFavoriteOffersAction.fulfilled([mockOffer], '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should set "isOffersDataLoading" to "false" with "fetchFavoriteOffersAction.rejected"', () => {
      const expectedState = {
        ...initialState,
        isOffersDataLoading: false
      };

      const result = offersProcess.reducer(undefined, fetchFavoriteOffersAction.rejected);

      expect(result).toEqual(expectedState);
    });
  });

  describe('Change Favorite Status', () => {
    it('should set "isOffersDataUpdating" to "true" with "changeOfferFavoriteStatusAction.pending"', () => {
      const expectedState = {
        ...initialState,
        isOffersDataUpdating: true
      };

      const result = offersProcess.reducer(undefined, changeOfferFavoriteStatusAction.pending);

      expect(result).toEqual(expectedState);
    });

    it(`should set "isOffersDataUpdating" to "false", set "isFavorite" to "true",
      add offer to "favoriteOffers" with "changeOfferFavoriteStatusAction.fulfilled"`, () => {
      const mockOffer = {
        ...makeFakeDetailedOffer(),
        isFavorite: true
      };
      const state = {
        ...initialState,
        offers: [{
          ...mockOffer,
          isFavorite: false
        }],
      };

      const expectedState = {
        ...initialState,
        isOffersDataUpdating: false,
        offers: [mockOffer],
        favoriteOffers: [mockOffer]
      };

      const result = offersProcess.reducer(state, changeOfferFavoriteStatusAction.fulfilled(mockOffer, '', ''));

      expect(result).toEqual(expectedState);
    });

    it('set "isFavorite" to "false", remove offer from "favoriteOffers" with "changeOfferFavoriteStatusAction.fulfilled"', () => {
      const mockOffer = {
        ...makeFakeDetailedOffer(),
        isFavorite: false
      };
      const state = {
        ...initialState,
        offers: [{
          ...mockOffer,
          isFavorite: true
        }],
        favoriteOffers: [{
          ...mockOffer,
          isFavorite: true
        }]
      };

      const expectedState = {
        ...initialState,
        isOffersDataUpdating: false,
        offers: [mockOffer],
        favoriteOffers: []
      };

      const result = offersProcess.reducer(state, changeOfferFavoriteStatusAction.fulfilled(mockOffer, '', ''));

      expect(result).toEqual(expectedState);
    });

    it('should set "isOffersDataUpdating" to "false" with "changeOfferFavoriteStatusAction.rejected"', () => {
      const expectedState = {
        ...initialState,
        isOffersDataUpdating: false
      };

      const result = offersProcess.reducer(undefined, changeOfferFavoriteStatusAction.rejected);

      expect(result).toEqual(expectedState);
    });
  });
});
