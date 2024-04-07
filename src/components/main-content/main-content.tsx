import { useCallback, useState } from 'react';
import { sortOffersByValue } from '../../common/utils';
import { SORT_BY_VALUES } from '../../const';
import MainPageEmpty from '../../pages/main-page/main-page-empty';
import { City, OfferCardType, RenderMapFunctionType, SortingType } from '../../types';
import OffersList from '../offers-list/offers-list';
import { MemoSorting as Sorting} from '../sorting/sorting';

const MAP_CLASS = 'cities__map';
const MAIN_LIST_CLASS = 'cities__places-list tabs__content';
const MAIN_BLOCK_CLASS = 'cities';

type MainPageContentProps = {
  renderMap: RenderMapFunctionType;
  currentCity: City;
  currentOffers: OfferCardType[];
  offersAmount: number;
}


export default function MainPageContent({renderMap, currentCity, currentOffers, offersAmount}: MainPageContentProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<OfferCardType | null>(null);
  const [currentSorting, setCurrentSorting] = useState<SortingType>(SORT_BY_VALUES[0]);

  const handleOfferCardMouseEnter = useCallback((card: OfferCardType): void => {
    setActiveCard(card);
  }, []);

  const handleOfferCardMouseLeave = useCallback((): void =>{
    setActiveCard(null);
  }, []);

  const handleSortingChange = useCallback((sortBy: SortingType): void => {
    setCurrentSorting(sortBy);
  }, []);

  return offersAmount > 0 ? (
    <div className="cities">
      <div className="cities__places-container container">
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
        <div className="cities__right-section">
          {renderMap(currentCity, currentOffers, activeCard?.id, MAP_CLASS)}
        </div>
      </div>
    </div>
  ) : <MainPageEmpty cityName={currentCity.name} />;
}
