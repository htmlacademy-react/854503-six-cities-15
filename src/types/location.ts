import { Cities } from '../const';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: LocationType;
}

export type CitiesNames = keyof typeof Cities;
