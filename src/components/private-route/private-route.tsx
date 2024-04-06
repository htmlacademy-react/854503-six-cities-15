import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import LoginPage from '../../pages/login-page/login-page';

type PrivateRouteProps = React.PropsWithChildren;

export function PrivateRoute({children}: PrivateRouteProps) {
  const authorizationStatus: AuthorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth ?
      children :
      <LoginPage />
  );
}
