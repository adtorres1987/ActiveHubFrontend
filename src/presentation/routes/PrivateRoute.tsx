import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ROUTES, STORAGE_KEYS } from '../../helpers/constants';

export const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const hasAccessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
  const hasRefreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

  // User must be authenticated OR have both tokens in localStorage
  if (!isAuthenticated && (!hasAccessToken || !hasRefreshToken)) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};
