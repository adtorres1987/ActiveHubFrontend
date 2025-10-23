import { AppDispatch } from '../store';
import { loginStart, loginSuccess, loginFailure, logout as logoutAction } from '../slices/authSlice';
import { AuthDatasourceImpl } from '../../infrastructure/datasources/auth.datasource.impl';
import { AuthRepositoryImpl } from '../../infrastructure/repositories/auth.repository.impl';
import { LoginUseCase } from '../../core/use-cases/auth/login.use-case';
import { RegisterUseCase } from '../../core/use-cases/auth/register.use-case';
import { RenewTokenUseCase } from '../../core/use-cases/auth/renew-token.use-case';
import { LogoutUseCase } from '../../core/use-cases/auth/logout.use-case';
import { LoginDto } from '../../core/dtos/auth/login.dto';
import { RegisterDto } from '../../core/dtos/auth/register.dto';
import { handleApiError } from '../../helpers/errors';

// Setup dependencies
const datasource = new AuthDatasourceImpl();
const repository = new AuthRepositoryImpl(datasource);
const loginUseCase = new LoginUseCase(repository);
const registerUseCase = new RegisterUseCase(repository);
const renewTokenUseCase = new RenewTokenUseCase(repository);
const logoutUseCase = new LogoutUseCase(repository);

export const login = (loginDto: LoginDto) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginStart());
    const response = await loginUseCase.execute(loginDto);
    dispatch(loginSuccess(response));
    return { success: true };
  } catch (error: any) {
    const errorMessage = handleApiError(error);
    dispatch(loginFailure(errorMessage));
    return { success: false, error: errorMessage };
  }
};

export const register = (registerDto: RegisterDto) => async (dispatch: AppDispatch) => {
  try {
    dispatch(loginStart());
    const response = await registerUseCase.execute(registerDto);
    dispatch(loginSuccess(response));
    return { success: true };
  } catch (error: any) {
    const errorMessage = handleApiError(error);
    dispatch(loginFailure(errorMessage));
    return { success: false, error: errorMessage };
  }
};

export const renewToken = () => async (dispatch: AppDispatch) => {
  try {
    const response = await renewTokenUseCase.execute();
    dispatch(loginSuccess(response));
    return { success: true };
  } catch (error: any) {
    dispatch(logoutAction());
    return { success: false };
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    // Call backend logout endpoint
    await logoutUseCase.execute();
  } catch (error) {
    // Even if logout fails on backend, we should clear local state
    console.error('Logout error:', error);
  } finally {
    // Always clear local state
    dispatch(logoutAction());
  }
};
