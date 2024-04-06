export const OFFERS_AMOUNT = 5;
export const RATING_STEP = 15;

export enum AppRoute {
  Root = '/',
  Login = 'login',
  Favorites = 'favorites',
  Offer = 'offer',
  NotFound = 'not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
