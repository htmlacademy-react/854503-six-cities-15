import { ComponentType } from 'react';
import Map from '../../components/map/map';
import { RenderMapFunctionType } from './types';
import { City, OfferCardType } from '../../types';
import { ActivePoint } from '../../types/map';

type HOCProps = {
  renderMap: RenderMapFunctionType;
}

export default function withMap<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {

  type ComponentProps = Omit<T, keyof HOCProps>;

  function WithMap(props: ComponentProps): JSX.Element {
    return (
      <Component
        {...props as T}
        renderMap={(city: City, offers: OfferCardType[], activePoint: ActivePoint, containerClass: string) => (
          <Map
            city={city}
            offers={offers}
            activePoint={activePoint}
            containerClass={containerClass}
          />
        )}
      />
    );
  }

  return WithMap;
}
