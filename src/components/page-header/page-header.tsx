import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MouseEvent } from 'react';
import { logoutAction } from '../../store/user-process/user-process.thunks';
import { getAuthCheckedStatus, getUserData } from '../../store/user-process/user-process.selectors';
import { getFavoriteOffers } from '../../store/offers-process/offers-process.selectors';
type PageHeaderProps = {
  isPlain: boolean;
}

export default function PageHeader({isPlain = false}: PageHeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const isAuth = useAppSelector(getAuthCheckedStatus);
  const favoriteOffersAmount = useAppSelector(getFavoriteOffers);

  function handleSignoutClick(evt: MouseEvent) {
    evt.preventDefault();

    dispatch(logoutAction());
  }

  return (
    <header className="header">
      {isPlain ? (
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              {
                isAuth ? (
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                        <div style={{backgroundImage: `url(${userData!.avatarUrl})`}} className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{userData!.email}</span>
                        <span className="header__favorite-count">{favoriteOffersAmount.length}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a onClick={handleSignoutClick} className="header__nav-link">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </ul>
                ) : (
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  </ul>
                )
              }
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
