import { MouseEvent } from 'react';
import { CITIES_LOCATION, Cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, fillOffers } from '../../store/actions';
import { City } from '../../types';

export default function LocationsList(): JSX.Element {
  const locations = Object.keys(CITIES_LOCATION);
  const currentCity: City = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const onLocationClick = (evt: MouseEvent<HTMLElement>, location: string) => {
    evt.preventDefault();

    dispatch(changeCity(CITIES_LOCATION[location as keyof typeof Cities]));
    dispatch(fillOffers());
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          locations.map((location: string, index) => {
            const isCurrent = location === currentCity.name;
            const key = `location${ index}`;

            return (
              <li key={key} className="locations__item">
                <a
                  onClick={(evt) => onLocationClick(evt, location)}
                  className={`locations__item-link tabs__item ${isCurrent ? 'tabs__item--active' : ''}`}
                >
                  <span>{location}</span>
                </a>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}
