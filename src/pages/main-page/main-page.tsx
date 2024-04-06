import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import OffersList from '../../components/offers-list/offers-list';
import { OfferCardType } from '../../types/offer';
import { useState } from 'react';
import Map from '../../components/map/map';
import { LocationType } from '../../types/common';
import { MAIN_PAGE_MAP_CLASS } from '../../const';

type MainPageProps = {
  offersAmount: number;
  offerCards: OfferCardType[];
  defaultCityLocation: LocationType;
}

export default function MainPage({offersAmount, offerCards, defaultCityLocation}: MainPageProps) {
  const [activeCard, setActiveCard] = useState<OfferCardType | null>(null);

  function onOfferCardMouseEnter(card: OfferCardType): void {
    setActiveCard(card);
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Main</title>
      </Helmet>
      <PageHeader isPlain={false} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList
              offersAmount={offersAmount}
              offerCards={offerCards}
              onOfferCardMouseEnter={onOfferCardMouseEnter}
            />
            <div className="cities__right-section">
              <Map
                cityLocation={defaultCityLocation}
                points={offerCards}
                activePoint={activeCard}
                containerClass={MAIN_PAGE_MAP_CLASS}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
