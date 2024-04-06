import { useEffect, useRef } from 'react';
import { OfferCardType } from '../../types';
import useMap from './use-map';
import { LocationType } from '../../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  cityLocation: LocationType;
  points: OfferCardType[];
  activePoint: OfferCardType | null;
  containerClass: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({cityLocation, points, activePoint, containerClass}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, cityLocation});


  useEffect(() => {
    if (map) {
      points.forEach((card) => {
        leaflet
          .marker({
            lat: card.location.latitude,
            lng: card.location.longitude,
          }, {
            icon: card.id === activePoint?.id ?
              currentCustomIcon :
              defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, cityLocation, points, activePoint]);

  return (
    <section ref={mapRef} className={`${containerClass} map`}></section>
  );
}
