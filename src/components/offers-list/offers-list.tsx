import { OfferCardType } from '../../types';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offerCards: OfferCardType[];
  blockClass: string;
  containerClass?: string;
  onOfferCardMouseEnter: (card: OfferCardType) => void;
}

function getOffers(offerCards: OfferCardType[], blockClass:string, onOfferCardMouseEnter: (card: OfferCardType) => void): JSX.Element[] {
  return offerCards.map((offerCard) => (
    <OfferCard
      onOfferCardMouseEnter={onOfferCardMouseEnter}
      offerCard={offerCard}
      blockClass={blockClass}
      key={offerCard.id}
    />
  ));
}

export default function OffersList(props: OffersListProps): JSX.Element {
  const {offerCards, onOfferCardMouseEnter, blockClass, containerClass = ''} = props;

  return (
    <div className={`${blockClass}__list ${containerClass} places__list`}>
      {getOffers(offerCards, blockClass, onOfferCardMouseEnter)}
    </div>
  );
}
