import { ComponentType } from 'react';
import Map from '../../components/map/map';
import { LocationType } from '../../types/common';
import { OfferLikeType } from '../../types/offer';
import { RenderMapFunctionType } from './types';

type HOCProps = {
  renderMap: RenderMapFunctionType;
}

export default function withMap<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithMap(props: ComponentProps): JSX.Element {
    return (
      <Component
        {...props as T}
        renderMap={(cityLocation: LocationType, points: OfferLikeType[], activePoint: OfferLikeType | null, containerClass: string) => (
          <Map
            cityLocation={cityLocation}
            points={points}
            activePoint={activePoint}
            containerClass={containerClass}
          />
        )}
      />
    );
  }

  return WithMap;
}
