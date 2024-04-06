import { Cities, SORT_BY_VALUES } from '../const';
import { OfferCardType } from './offer';

export type OffersSortedByCities = Record<keyof typeof Cities, OfferCardType[]>;

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: LocationType;
}

export type ImageSizeType = {
  width: number;
  height: number;
}

export type CitiesNames = keyof typeof Cities;

export type SortingType = typeof SORT_BY_VALUES[number];
