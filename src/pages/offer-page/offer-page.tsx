import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import { City, Offer, OfferCardType } from '../../types';
import NotFoundPage from '../not-found-page/not-found-page';
import { RenderMapFunctionType } from '../../types';
import OffersList from '../../components/offers-list/offers-list';
import { useAppSelector } from '../../hooks';
import { getRatingWidth } from '../../common/utils';
import { getCurrentCity } from '../../store/city/city.selectors';
import { getDetailedOffer, getNearbyOffers } from '../../store/offers-process/offers-process.selectors';
import Reviews from '../../components/reviews/reviews';
import { OfferImage, OfferFeatures, OfferGoods, OfferHost } from './components';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import { OFFER_BOOKMARK_IMAGE_SIZE } from '../../const';

const MAP_CLASS = 'offer__map';
const NEAR_OFFER_BLOCK_CLASS = 'near-places';
const OFFER_BLOCK_CLASS = 'offer';

type OfferPageProps = {
  renderMap: RenderMapFunctionType;
}

export default function OfferPage({renderMap}: OfferPageProps): JSX.Element {
  const offerData: Offer | null = useAppSelector(getDetailedOffer);
  const nearbyOffers: OfferCardType[] = useAppSelector(getNearbyOffers);
  const city: City = useAppSelector(getCurrentCity);

  return offerData ? (
    <div className="page">
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>
      <PageHeader isPlain={false} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offerData.images.map((image) => (
                  <OfferImage url={image} key={image} />
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerData.title}
                </h1>
                <BookmarkButton
                  offerId={offerData.id}
                  isFavorite={offerData.isFavorite}
                  blockClass={OFFER_BLOCK_CLASS}
                  imageSize={OFFER_BOOKMARK_IMAGE_SIZE}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getRatingWidth(offerData.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerData.rating}</span>
              </div>
              <OfferFeatures
                type={offerData.type}
                bedrooms={offerData.bedrooms}
                maxAdults={offerData.maxAdults}
              />
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerData.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferGoods goods={offerData.goods} />
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <OfferHost
                  name={offerData.host.name}
                  avatarUrl={offerData.host.avatarUrl}
                  isPro={offerData.host.isPro}
                />
                <div className="offer__description">
                  <p className="offer__text">
                    {offerData.description}
                  </p>
                </div>
              </div>
              <Reviews offerId={offerData.id} />
            </div>
          </div>
          {renderMap(city, nearbyOffers.slice(0, 3), offerData, MAP_CLASS)}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offerCards={nearbyOffers.slice(0, 3)}
              blockClass={NEAR_OFFER_BLOCK_CLASS}
              onOfferCardMouseEnter={() => null}
              onOfferCardMouseLeave={() => null}
            />
          </section>
        </div>
      </main>
    </div>
  ) : (
    <NotFoundPage />
  );
}
