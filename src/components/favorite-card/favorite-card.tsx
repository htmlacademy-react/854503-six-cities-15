import { RATING_STEP } from '../../const';
import { OfferCardType } from '../../types/offer';

type FavoriteCardProps = {
  offerCard: OfferCardType;
}

export default function FavoriteCard({offerCard}: FavoriteCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {
        offerCard.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> :
          ''
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offerCard.previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerCard.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
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
          <a href="#">{offerCard.title}</a>
        </h2>
        <p className="place-card__type">{offerCard.type}</p>
      </div>
    </article>
  );
}
