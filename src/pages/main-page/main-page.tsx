import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import OffersList from '../../components/offers-list/offers-list';
import { City, OfferCardType, RenderMapFunctionType, SortingType } from '../../types';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppSelector } from '../../hooks';
import Sorting from '../../components/sorting/sorting';
import { Cities, SORT_BY_VALUES } from '../../const';
import { sortOffersByCity, sortOffersByValue } from '../../common/utils';

const MAP_CLASS = 'cities__map';
const MAIN_LIST_CLASS = 'cities__places-list tabs__content';
const MAIN_BLOCK_CLASS = 'cities';

type MainPageProps = {
  renderMap: RenderMapFunctionType;
}

export default function MainPage({renderMap}: MainPageProps) {
  const [activeCard, setActiveCard] = useState<OfferCardType | null>(null);
  const [currentSorting, setCurrentSorting] = useState<SortingType>(SORT_BY_VALUES[0]);

  const currentCity: City = useAppSelector((state) => state.city);
  const offers: OfferCardType[] = useAppSelector((state) => state.offers);
  const currentOffers: OfferCardType[] = sortOffersByCity(offers)[currentCity.name as Cities];

  const offersAmount = currentOffers?.length || 0;

  function handleOfferCardMouseEnter(card: OfferCardType): void {
    setActiveCard(card);
  }
  function handleOfferCardMouseLeave(): void {
    setActiveCard(null);
  }
  function handleSortingChange(sortBy: SortingType): void {
    setCurrentSorting(sortBy);
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
                  <Sorting
                    sortBy={currentSorting}
                    onSortingChange={handleSortingChange}
                  />
                  <OffersList
                    offerCards={sortOffersByValue(currentOffers, currentSorting)}
                    onOfferCardMouseEnter={handleOfferCardMouseEnter}
                    onOfferCardMouseLeave={handleOfferCardMouseLeave}
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
