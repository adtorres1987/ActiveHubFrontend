import { LoginDto, LoginResponse } from '../dtos/auth/login.dto';
import { RegisterDto, RegisterResponse } from '../dtos/auth/register.dto';
import { ValidateEmailResponse } from '../dtos/auth/validate-email.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class AuthRepository {
  abstract login(loginDto: LoginDto): Promise<LoginResponse>;
  abstract register(registerDto: RegisterDto): Promise<RegisterResponse>;
  abstract renewToken(): Promise<{ user: UserEntity; accessToken: string }>;
  abstract logout(): Promise<void>;
  abstract validateEmail(token: string): Promise<ValidateEmailResponse>;
}
