import { useEffect, useRef } from 'react';
import { City, Offer, OfferCardType } from '../../types';
import useMap from './use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ActivePoint } from '../../types/map';

type MapProps = {
  city: City;
  offers: OfferCardType[];
  activePoint: ActivePoint;
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

export default function Map({
  city,
  offers,
  activePoint,
  containerClass,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});
  let activeCardId: string | undefined | null;
  let currentOffers: (OfferCardType | Offer | null)[] = offers;

  if (typeof activePoint === 'object' && activePoint !== null) {
    activeCardId = activePoint.id;
    currentOffers = currentOffers.slice().concat([activePoint]);
  } else {
    activeCardId = activePoint;
  }

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
      currentOffers.forEach((card) => {
        leaflet
          .marker({
            lat: card!.location.latitude,
            lng: card!.location.longitude,
          }, {
            icon: card!.id === activeCardId ?
              currentCustomIcon :
              defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, currentOffers, city, activeCardId]);

  return (
    <section ref={mapRef} className={`${containerClass} map`}></section>
  );
}
