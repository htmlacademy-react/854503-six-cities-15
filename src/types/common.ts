import { Cities, SORT_BY_VALUES } from '../const';
import { OfferCardType } from './offer';

export type OffersSortedByCities = Record<keyof typeof Cities, OfferCardType[]>;

export type ImageSizeType = {
  width: number;
  height: number;
}

export type SortingType = typeof SORT_BY_VALUES[number];
