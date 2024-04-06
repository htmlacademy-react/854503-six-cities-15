import { AuthorizationStatus } from '../../const';
import LoginPage from '../../pages/login-page/login-page';

type PrivateRouteProps = React.PropsWithChildren<{
  authStatus: AuthorizationStatus;
}>;

export function PrivateRoute({authStatus, children}: PrivateRouteProps) {
  return (
    authStatus === AuthorizationStatus.Auth ?
      children :
      <LoginPage />
  );
}
