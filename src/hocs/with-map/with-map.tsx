import { ComponentType } from 'react';
import Map from '../../components/map/map';
import { LocationType, OfferCardType } from '../../types';
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
        renderMap={(cityLocation: LocationType, points: OfferCardType[], activePoint: OfferCardType | null, containerClass: string) => (
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
