import { httpClient } from '../../config/axios.adapter';
import { LoginDto, LoginResponse } from '../../core/dtos/auth/login.dto';
import { RegisterDto, RegisterResponse } from '../../core/dtos/auth/register.dto';
import { ValidateEmailResponse } from '../../core/dtos/auth/validate-email.dto';
import { STORAGE_KEYS } from '../../helpers/constants';

export class AuthDatasourceImpl {
  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const response = await httpClient.post<LoginResponse>('/auth/login', loginDto);
    return response;
  }

  async register(registerDto: RegisterDto): Promise<RegisterResponse> {
    const response = await httpClient.post<RegisterResponse>('/auth/register', registerDto);
    return response;
  }

  async renewToken(): Promise<{ user: any; accessToken: string }> {
    const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
    const response = await httpClient.post<{ user: any; accessToken: string }>(
      '/auth/renew',
      { refreshToken }
    );
    return response;
  }

  async logout(): Promise<void> {
    await httpClient.post<void>('/auth/logout');
  }

  async validateEmail(token: string): Promise<ValidateEmailResponse> {
    const response = await httpClient.get<ValidateEmailResponse>(`/auth/validate-email/${token}`);
    return response;
  }
}
