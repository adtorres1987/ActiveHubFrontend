import { GetUsersResponse } from '../../dtos/user/user-list.dto';
import { UserRepository } from '../../repositories/user.repository';

export class GetAllUsersUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(page: number = 1, limit: number = 10): Promise<GetUsersResponse> {
    return await this.repository.getAll(page, limit);
  }
}
