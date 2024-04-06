import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { City } from '../../types/index';
import { Map, TileLayer } from 'leaflet';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  city: City;
}

export default function useMap({mapRef, city}: UseMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);
  const currenCity = useRef<string | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom
      });

      const layout = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layout);

      setMap(instance);
      isRenderedRef.current = true;
      currenCity.current = city.name;
    }
  }, [mapRef, city]);

  return map;
}
