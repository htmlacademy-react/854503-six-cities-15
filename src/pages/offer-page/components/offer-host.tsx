type OfferHostProps = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export default function OfferHost({isPro, name, avatarUrl}: OfferHostProps): JSX.Element {
  return (
    <div className="offer__host-user user">
      <div className={`
        offer__avatar-wrapper
        user__avatar-wrapper
        ${isPro && 'offer__avatar-wrapper--pro'}
      `}
      >
        <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
      </div>
      <span className="offer__user-name">
        {name}
      </span>
      {
        isPro && (
          <span className="offer__user-status">
            Pro
          </span>
        )
      }
    </div>
  );
}
