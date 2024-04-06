import { Link } from 'react-router-dom';
import { AppRoute, RATING_STEP } from '../../const';
import { ImageSizeType, OfferCardType } from '../../types';

type OfferCardProps = {
  offerCard: OfferCardType;
  blockClass: string;
  imageSize?: ImageSizeType;
  onOfferCardMouseEnter?: (card: OfferCardType) => void;
  onOfferCardMouseLeave?: () => void;
}

export default function OfferCard(props: OfferCardProps): JSX.Element {
  const {
    offerCard,
    onOfferCardMouseEnter,
    onOfferCardMouseLeave,
    blockClass,
    imageSize = {
      width: 260,
      height: 200
    }
  } = props;

  return (
    <article
      onMouseEnter={() => onOfferCardMouseEnter && onOfferCardMouseEnter(offerCard)}
      onMouseLeave={() => onOfferCardMouseLeave && onOfferCardMouseLeave()}
      className={`${blockClass}__card place-card`}
    >
      {
        offerCard.isPremium ?
          <div className='place-card__mark'>
            <span>Premium</span>
          </div> :
          ''
      }
      <div className={`${blockClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offerCard.id}`}>
          <img className='place-card__image' src={offerCard.previewImage} width={imageSize.width} height={imageSize.height} alt="Place image" />
        </Link>
      </div>
      <div className={`${blockClass}__card-info place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offerCard.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={`
            place-card__bookmark-button
            button
            ${offerCard.isFavorite ? 'place-card__bookmark-button--active' : ''}
            `}
          type="button"
          >
            <svg className='place-card__bookmark-icon' width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: `${RATING_STEP * offerCard.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`${AppRoute.Offer}/${offerCard.id}`}>{offerCard.title}</Link>
        </h2>
        <p className='place-card__type'>{offerCard.type}</p>
      </div>
    </article>
  );
}
