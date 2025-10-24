import { UpdateUserResponse } from '../../dtos/user/update-user.dto';
import { UserRepository } from '../../repositories/user.repository';

export class DeleteUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: number): Promise<UpdateUserResponse> {
    return await this.repository.delete(id);
  }
}
