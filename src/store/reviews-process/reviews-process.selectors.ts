import { NameSpace } from '../../const';
import { State } from '../../types';

export const getReviewsDataLoading = (state: State) => state[NameSpace.Reviews].isReviewsDataLoading;

export const getReviews = (state: State) => state[NameSpace.Reviews].reviews;
