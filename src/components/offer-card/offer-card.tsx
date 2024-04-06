import { Link } from 'react-router-dom';
import { AppRoute, RATING_STEP } from '../../const';
import { OfferCardType } from '../../types/offer';

type OfferCardProps = {
  offerCard: OfferCardType;
  onOfferCardMouseEnter: (cardId: string) => void;
}

export default function OfferCard({offerCard, onOfferCardMouseEnter}: OfferCardProps): JSX.Element {
  return (
    <article
      onMouseEnter={() => onOfferCardMouseEnter(offerCard.id)}
      className="cities__card place-card"
    >
      {
        offerCard.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> :
          ''
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offerCard.id}`}>
          <img className="place-card__image" src={offerCard.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerCard.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`
            place-card__bookmark-button
            button
            ${offerCard.isFavorite ? 'place-card__bookmark-button--active' : ''}
            `}
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${RATING_STEP * offerCard.rating}px`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offerCard.id}`}>{offerCard.title}</Link>
        </h2>
        <p className="place-card__type">{offerCard.type}</p>
      </div>
    </article>
  );
}
