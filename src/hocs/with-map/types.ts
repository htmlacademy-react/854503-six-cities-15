import { LocationType } from '../../types/common';
import { OfferLikeType } from '../../types/offer';

export type RenderMapFunctionType = (
  cityLocation: LocationType,
  points: OfferLikeType[],
  activePoint: OfferLikeType | null,
  containerClass: string
) => JSX.Element;
