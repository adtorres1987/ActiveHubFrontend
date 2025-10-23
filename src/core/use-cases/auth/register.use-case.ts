import { RegisterDto, RegisterResponse } from '../../dtos/auth/register.dto';
import { AuthRepository } from '../../repositories/auth.repository';

export class RegisterUseCase {
  constructor(private readonly repository: AuthRepository) {}

  async execute(registerDto: RegisterDto): Promise<RegisterResponse> {
    return await this.repository.register(registerDto);
  }
}
