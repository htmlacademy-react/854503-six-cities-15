import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import { City, Offer, OfferCardType } from '../../types';
import NotFoundPage from '../not-found-page/not-found-page';
import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { ReviewType } from '../../types';
import { RenderMapFunctionType } from '../../types';
import OffersList from '../../components/offers-list/offers-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRatingWidth } from '../../common/utils';
import { AppRoute, AuthorizationStatus } from '../../const';
import { MouseEvent, useEffect } from 'react';
import { fetchNearbyOffersAction, fetchOfferDataAction, fetchReviewsAction } from '../../store/api-actions';
import OfferImage from './components/offer-image';
import OfferGoods from './components/offer-goods';
import OfferFeatures from './components/offer-features';
import OfferHost from './components/offer-host';

const MAP_CLASS = 'offer__map';
const OFFER_BLOCK_CLASS = 'near-places';

type OfferPageProps = {
  renderMap: RenderMapFunctionType;
}

export default function OfferPage({renderMap}: OfferPageProps): JSX.Element {
  const {id: offerId} = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth;
  const offerData: Offer | null = useAppSelector((state) => state.detailedOffer);
  const reviews: ReviewType[] = useAppSelector((state) => state.reviews);
  const nearbyOffers: OfferCardType[] = useAppSelector((state) => state.nearbyOffers);
  const city: City = useAppSelector((state) => state.city);

  useEffect(() => {
    if (!offerId) {
      return;
    }

    dispatch(fetchOfferDataAction(offerId));
    dispatch(fetchReviewsAction(offerId));
    dispatch(fetchNearbyOffersAction(offerId));

  }, [offerId, dispatch]);

  function handleBookmarkClick(evt: MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();

    if (!isAuth) {
      navigate(AppRoute.Login);
    }
  }

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
                <button onClick={handleBookmarkClick} className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
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
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                {
                  isAuth && <ReviewForm offerId={offerData.id}/>
                }
              </section>
            </div>
          </div>
          {renderMap(city, nearbyOffers.slice(0, 3), offerData, MAP_CLASS)}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offerCards={nearbyOffers.slice(0, 3)}
              blockClass={OFFER_BLOCK_CLASS}
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
