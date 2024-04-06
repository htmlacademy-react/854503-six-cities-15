import { LocationType } from '../../types/index';
import { OfferLikeType } from '../../types/index';

export type RenderMapFunctionType = (
  cityLocation: LocationType,
  points: OfferLikeType[],
  activePoint: OfferLikeType | null,
  containerClass: string
) => JSX.Element;
