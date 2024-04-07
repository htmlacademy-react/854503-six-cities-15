import { Helmet } from 'react-helmet-async';
import PageHeader from '../../components/page-header/page-header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, CITIES_LOCATION, Cities } from '../../const';
import { Navigate, useNavigate } from 'react-router-dom';
import { FormEvent, MouseEvent, useRef } from 'react';
import { loginAction } from '../../store/user-process/user-process.thunks';
import { getAuthCheckedStatus } from '../../store/user-process/user-process.selectors';
import { changeCity } from '../../store/city/city.slice';
import { CitiesNames } from '../../types';
import { getRandomInt } from '../../common/utils';

export default function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(getAuthCheckedStatus);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const randomNumber = getRandomInt(0, Object.keys(Cities).length - 1);
  const locationName = Object.keys(Cities)[randomNumber];

  function handleSubmit(evt: FormEvent<HTMLFormElement>): void {
    evt.preventDefault();

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  }

  function handleLinkClick(evt: MouseEvent<HTMLAnchorElement>): void {
    evt.preventDefault();

    dispatch(changeCity(CITIES_LOCATION[locationName as CitiesNames]));
    navigate(AppRoute.Root);
  }

  return (
    isAuth ?
      <Navigate to={AppRoute.Root} /> :
      <div className="page page--gray page--login">
        <Helmet>
          <title>6 cities. Login</title>
        </Helmet>
        <PageHeader isPlain />

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={emailRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a onClick={handleLinkClick} className="locations__item-link">
                  <span>{locationName}</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
}
