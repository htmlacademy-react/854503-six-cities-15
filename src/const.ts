import { CitiesNames, City, ImageSizeType } from './types';

export const RATING_WIDTH_STEP = 20;
export const DEFAULT_OFFER_CARD_IMAGE_SIZE: ImageSizeType = {
  width: 260,
  height: 200
};
export const OFFER_CARD_IMAGE_SIZE: ImageSizeType = {
  width: 150,
  height: 110
};
export const DEFAULT_BOOKMARK_IMAGE_SIZE: ImageSizeType = {
  width: 18,
  height: 19
};
export const OFFER_BOOKMARK_IMAGE_SIZE: ImageSizeType = {
  width: 31,
  height: 33
};


export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/not-found'
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

export const SORT_BY_VALUES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export const CITIES_LOCATION: Record<CitiesNames, City> = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
};

export enum Endpoints {
  Offers = '/offers',
  Favorites = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum NameSpace {
  CityData = 'CITY',
  Offers = 'OFFERS',
  User = 'USER',
  Reviews = 'REVIEWS'
}
