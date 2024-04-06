import { LocationType, OfferCardType } from '../../types/index';

export type RenderMapFunctionType = (
  cityLocation: LocationType,
  points: OfferCardType[],
  activePoint: OfferCardType | null,
  containerClass: string
) => JSX.Element;
