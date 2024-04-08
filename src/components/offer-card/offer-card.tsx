import { Link } from 'react-router-dom';
import { AppRoute, DEFAULT_OFFER_CARD_IMAGE_SIZE } from '../../const';
import { ImageSizeType, OfferCardType } from '../../types';
import { getRatingWidth } from '../../common/utils';
import { MemoBookmarkButton as BookmarkButton} from '../bookmark-button/bookmark-button';
import { memo } from 'react';

const OFFER_CARD_BLOCK_CLASS = 'place-card';

type OfferCardProps = {
  offerCard: OfferCardType;
  blockClass: string;
  imageSize?: ImageSizeType;
  onOfferCardMouseEnter?: (card: OfferCardType) => void;
  onOfferCardMouseLeave?: () => void;
}
function OfferCard(props: OfferCardProps): JSX.Element {
  const {
    offerCard,
    onOfferCardMouseEnter,
    onOfferCardMouseLeave,
    blockClass,
    imageSize = DEFAULT_OFFER_CARD_IMAGE_SIZE
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
          <img className='place-card__image'
            src={offerCard.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${blockClass}__card-info place-card__info`}>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offerCard.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={offerCard.id}
            blockClass={OFFER_CARD_BLOCK_CLASS}
            isFavorite={offerCard.isFavorite}
          />
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: getRatingWidth(offerCard.rating)}}></span>
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

export const MemoOfferCard = memo(OfferCard);
