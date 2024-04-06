import { useEffect, useRef } from 'react';
import { City, OfferCardType } from '../../types';
import useMap from './use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';

type MapProps = {
  city: City;
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

export default function Map({city, activePoint, containerClass}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  const pointsByCity = useAppSelector((state) => state.currentCityOffers);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
      pointsByCity?.forEach((card) => {
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
  }, [map, pointsByCity, city, activePoint]);

  return (
    <section ref={mapRef} className={`${containerClass} map`}></section>
  );
}
