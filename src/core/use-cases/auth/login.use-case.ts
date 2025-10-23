import { LoginDto, LoginResponse } from '../../dtos/auth/login.dto';
import { AuthRepository } from '../../repositories/auth.repository';

export class LoginUseCase {
  constructor(private readonly repository: AuthRepository) {}

  async execute(loginDto: LoginDto): Promise<LoginResponse> {
    return await this.repository.login(loginDto);
  }
}
