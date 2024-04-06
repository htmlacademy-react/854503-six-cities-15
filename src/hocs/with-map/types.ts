import { City, OfferCardType } from '../../types/index';

export type RenderMapFunctionType = (
  city: City,
  activePoint: OfferCardType | null,
  containerClass: string | null
) => JSX.Element;
