import { NameSpace } from '../../const';
import { State } from '../../types';

export const getReviews = (state: State) => state[NameSpace.Reviews].reviews;

export const getUserReviewLoading = (state: State) => state[NameSpace.Reviews].isUserReviewLoading;

export const getLoadingStatus = (state: State) => state[NameSpace.Reviews].isSucceeded;
