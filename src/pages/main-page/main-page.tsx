import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import OffersList from '../../components/offers-list/offers-list';
import { OfferCardType, RenderMapFunctionType } from '../../types';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppSelector } from '../../hooks';

const MAP_CLASS = 'cities__map';
const MAIN_LIST_CLASS = 'cities__places-list tabs__content';
const MAIN_BLOCK_CLASS = 'cities';

type MainPageProps = {
  offersAmount: number;
  offerCards: OfferCardType[];
  renderMap: RenderMapFunctionType;
}

export default function MainPage({offersAmount, offerCards, renderMap}: MainPageProps) {
  const [activeCard, setActiveCard] = useState<OfferCardType | null>(null);
  const currentCity = useAppSelector((state) => state.city);

  function onOfferCardMouseEnter(card: OfferCardType): void {
    setActiveCard(card);
  }
  function onOfferCardMouseLeave(): void {
    setActiveCard(null);
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
          <LocationsList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {
              offersAmount > 0 ? (
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersAmount} place{offersAmount > 1 && 's'} to stay in {currentCity.name}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                  Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <OffersList
                    offerCards={offerCards}
                    onOfferCardMouseEnter={onOfferCardMouseEnter}
                    onOfferCardMouseLeave={onOfferCardMouseLeave}
                    containerClass={MAIN_LIST_CLASS}
                    blockClass={MAIN_BLOCK_CLASS}
                  />
                </section>
              ) : (
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                  </div>
                </section>
              )
            }
            <div className="cities__right-section">
              {renderMap(currentCity, activeCard, MAP_CLASS)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
