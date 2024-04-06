type OfferGoodsProps = {
  goods: string[];
}

export default function OfferGoods({goods}: OfferGoodsProps): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {
        goods.map((item) => (
          <li key={item} className="offer__inside-item">
            {item}
          </li>
        ))
      }
    </ul>
  );
}
