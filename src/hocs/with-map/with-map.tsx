import { ComponentType } from 'react';
import Map from '../../components/map/map';
import { RenderMapFunctionType } from './types';
import { City, OfferCardType } from '../../types';

type HOCProps = {
  renderMap: RenderMapFunctionType;
}

export default function withMap<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithMap(props: ComponentProps): JSX.Element {
    return (
      <Component
        {...props as T}
        renderMap={(city: City, activePoint: OfferCardType | null, containerClass: string) => (
          <Map
            city={city}
            activePoint={activePoint}
            containerClass={containerClass}
          />
        )}
      />
    );
  }

  return WithMap;
}
