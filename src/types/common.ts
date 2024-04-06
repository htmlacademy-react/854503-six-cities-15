import { Cities } from '../const';
import { OfferCardType } from './offer';

export type SortedCards<T> = Partial<Record<keyof T, OfferCardType[]>>;

export type SortedCardsByCityType = SortedCards<typeof Cities>;

export type LocationType = {
    latitude: number;
    longitude: number;
    zoom: number;
}
