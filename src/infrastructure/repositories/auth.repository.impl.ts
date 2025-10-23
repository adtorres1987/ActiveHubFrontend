import { AuthRepository } from '../../core/repositories/auth.repository';
import { LoginDto, LoginResponse } from '../../core/dtos/auth/login.dto';
import { RegisterDto, RegisterResponse } from '../../core/dtos/auth/register.dto';
import { ValidateEmailResponse } from '../../core/dtos/auth/validate-email.dto';
import { UserEntity } from '../../core/entities/user.entity';
import { AuthDatasourceImpl } from '../datasources/auth.datasource.impl';

export class AuthRepositoryImpl extends AuthRepository {
  constructor(private readonly datasource: AuthDatasourceImpl) {
    super();
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    return await this.datasource.login(loginDto);
  }

  async register(registerDto: RegisterDto): Promise<RegisterResponse> {
    return await this.datasource.register(registerDto);
  }

  async renewToken(): Promise<{ user: UserEntity; accessToken: string }> {
    const response = await this.datasource.renewToken();
    return {
      user: UserEntity.fromObject(response.user),
      accessToken: response.accessToken,
    };
  }

  async logout(): Promise<void> {
    await this.datasource.logout();
  }

  async validateEmail(token: string): Promise<ValidateEmailResponse> {
    return await this.datasource.validateEmail(token);
  }
}
