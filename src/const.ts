export const RATING_STEP = 20;
export const MAIN_PAGE_MAP_CLASS = 'cities__map';
export const OFFER_PAGE_MAP_CLASS = 'offer__map';

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

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum Months {
  'January' = 1,
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
}
