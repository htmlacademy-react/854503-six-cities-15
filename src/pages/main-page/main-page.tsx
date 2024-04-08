import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import { City, OfferCardType } from '../../types';
import LocationsList from '../../components/locations-list/locations-list';
import { useAppSelector } from '../../hooks';
import { Cities } from '../../const';
import { sortOffersByCity } from '../../common/utils';
import { getCurrentCity } from '../../store/city/city.selectors';
import { getOffers, getOffersDataLoading } from '../../store/offers-process/offers-process.selectors';
import MainPageContent from '../../components/main-content/main-content';
import withMap from '../../hocs/with-map/with-map';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import './styles.css';

const MainPageContentWrapped = withMap(MainPageContent);

export default function MainPage() {
  const currentCity: City = useAppSelector(getCurrentCity);
  const offers: OfferCardType[] = useAppSelector(getOffers);
  const isOffersDataLoading = useAppSelector(getOffersDataLoading);

  const currentOffers: OfferCardType[] = sortOffersByCity(offers)[currentCity.name as Cities];
  const offersAmount = currentOffers.length || 0;

  return (
    <div className={`page page--gray page--main ${!offersAmount && 'page__main--index-empty'}`}>
      <Helmet>
        <title>6 cities. Main</title>
      </Helmet>
      <PageHeader isPlain={false} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList />
        </div>
        {
          isOffersDataLoading ?
            <LoadingScreen /> :
            <MainPageContentWrapped
              currentCity={currentCity}
              currentOffers={currentOffers}
              offersAmount={offersAmount}
            />
        }
      </main>
    </div>
  );
}
