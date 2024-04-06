type OfferImageProps = {
  url: string;
}

export default function OfferImage({url}: OfferImageProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={url} alt="Photo studio" />
    </div>
  );
}
