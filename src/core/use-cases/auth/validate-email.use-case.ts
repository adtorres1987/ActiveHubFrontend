import { ValidateEmailResponse } from '../../dtos/auth/validate-email.dto';
import { AuthRepository } from '../../repositories/auth.repository';

export class ValidateEmailUseCase {
  constructor(private readonly repository: AuthRepository) {}

  async execute(token: string): Promise<ValidateEmailResponse> {
    return await this.repository.validateEmail(token);
  }
}
