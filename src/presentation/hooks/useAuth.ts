import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { login as loginThunk, register as registerThunk, logout as logoutThunk } from '../../store/thunks/authThunks';
import { LoginDto } from '../../core/dtos/auth/login.dto';
import { RegisterDto } from '../../core/dtos/auth/register.dto';
import { ROUTES } from '../../helpers/constants';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated, user, loading, error } = useSelector((state: RootState) => state.auth);

  const login = async (loginDto: LoginDto) => {
    const result = await dispatch(loginThunk(loginDto));
    if (result.success) {
      navigate(ROUTES.DASHBOARD);
    }
    return result;
  };

  const register = async (registerDto: RegisterDto) => {
    const result = await dispatch(registerThunk(registerDto));
    if (result.success) {
      navigate(ROUTES.DASHBOARD);
    }
    return result;
  };

  const logout = () => {
    dispatch(logoutThunk());
    navigate(ROUTES.LOGIN);
  };

  return {
    isAuthenticated,
    user,
    loading,
    error,
    login,
    register,
    logout,
  };
};
