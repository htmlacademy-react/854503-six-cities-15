import { City, OfferCardType } from '../../types/index';
import { ActivePoint } from '../../types/map';

export type RenderMapFunctionType = (
  city: City,
  offers: OfferCardType[],
  activePoint: ActivePoint,
  containerClass: string | null
) => JSX.Element;
