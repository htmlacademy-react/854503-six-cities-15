import { useAppSelector } from '../../hooks';
import LoginPage from '../../pages/login-page/login-page';
import { getAuthCheckedStatus } from '../../store/user-process/user-process.selectors';

type PrivateRouteProps = React.PropsWithChildren;

export function PrivateRoute({children}: PrivateRouteProps) {
  const isAuth = useAppSelector(getAuthCheckedStatus);

  return (
    isAuth ?
      children :
      <LoginPage />
  );
}
