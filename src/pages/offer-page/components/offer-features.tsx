import { capitalized } from '../../../common/utils';

type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

export default function OfferFeatures({type, bedrooms, maxAdults}: OfferFeaturesProps): JSX.Element {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {capitalized(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} Bedroom{bedrooms > 1 && 's'}
      </li>
      <li className="offer__feature offer__feature--adults">
      Max {maxAdults} adult{maxAdults > 1 && 's'}
      </li>
    </ul>
  );
}
