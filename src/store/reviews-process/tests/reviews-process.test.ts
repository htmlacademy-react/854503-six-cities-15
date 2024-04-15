import { makeFakeReview } from '../../../common/test-utils';
import { reviewsProcess } from '../reviews-process.slice';
import { fetchReviewsAction, postUserReviewAction } from '../reviews-process.thunks';

describe('ReviewsProcess Slice', () => {
  const initialState = {
    isReviewsDataLoading: false,
    isUserReviewLoading: false,
    isSucceeded: true,
    reviews: []
  };

  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};

    const result = reviewsProcess.reducer(initialState, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};

    const result = reviewsProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(initialState);
  });

  it('should set "isReviewsDataLoading" to "true" with "fetchReviewsAction.pending"', () => {
    const expectedState = {
      ...initialState,
      isReviewsDataLoading: true
    };

    const result = reviewsProcess.reducer(undefined, fetchReviewsAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "false", fill "reviews" with "fetchReviewsAction.fulfilled"', () => {
    const mockReview = makeFakeReview();
    const expectedState = {
      ...initialState,
      isReviewsDataLoading: false,
      reviews: [mockReview]
    };

    const result = reviewsProcess.reducer(undefined, fetchReviewsAction.fulfilled([mockReview], '', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "false" with "fetchReviewsAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isReviewsDataLoading: false
    };

    const result = reviewsProcess.reducer(undefined, fetchReviewsAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "true", "isSucceeded" to "false" with "postUserReviewAction.pending"', () => {
    const expectedState = {
      ...initialState,
      isUserReviewLoading: true,
      isSucceeded: false
    };

    const result = reviewsProcess.reducer(undefined, postUserReviewAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "false", "isSucceeded" to "true", add item to reviews with "postUserReviewAction.fulfilled"', () => {
    const mockReview = makeFakeReview();
    const expectedState = {
      ...initialState,
      isReviewsDataLoading: false,
      isSucceeded: true,
      reviews: [mockReview]
    };

    const result = reviewsProcess.reducer(undefined, postUserReviewAction.fulfilled(mockReview, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "isReviewsDataLoading" to "false", "isSucceeded" to "false", add item to reviews with "postUserReviewAction.rejected"', () => {
    const expectedState = {
      ...initialState,
      isReviewsDataLoading: false,
      isSucceeded: false
    };

    const result = reviewsProcess.reducer(undefined, postUserReviewAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
