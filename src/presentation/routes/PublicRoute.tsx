import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ROUTES, STORAGE_KEYS } from '../../helpers/constants';

export const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const hasToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

  if (isAuthenticated || hasToken) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};
