import { UserEntity } from '../../entities/user.entity';
import { AuthRepository } from '../../repositories/auth.repository';

export class RenewTokenUseCase {
  constructor(private readonly repository: AuthRepository) {}

  async execute(): Promise<{ user: UserEntity; accessToken: string }> {
    return await this.repository.renewToken();
  }
}
