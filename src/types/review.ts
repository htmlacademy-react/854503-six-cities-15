export type ReviewType = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export type UserReview = {
  offerId: string;
  riview: {
    comment: string;
  rating: number;
  };
}
