import { OfferCardType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offerCards: OfferCardType[];
  blockClass: string;
  containerClass?: string;
  onOfferCardMouseEnter: (card: OfferCardType) => void;
  onOfferCardMouseLeave: () => void;
  onOfferCardClick: (id: string) => void;
}

export default function OffersList(props: OffersListProps): JSX.Element {
  const {offerCards, onOfferCardMouseEnter, onOfferCardMouseLeave, onOfferCardClick, blockClass, containerClass = ''} = props;

  return (
    <div className={`${blockClass}__list ${containerClass} places__list`}>
      {
        offerCards.map((offerCard) => (
          <OfferCard
            onOfferCardMouseEnter={onOfferCardMouseEnter}
            onOfferCardMouseLeave={onOfferCardMouseLeave}
            onOfferCardClick={onOfferCardClick}
            offerCard={offerCard}
            blockClass={blockClass}
            key={offerCard.id}
          />
        ))
      }
    </div>
  );
}
