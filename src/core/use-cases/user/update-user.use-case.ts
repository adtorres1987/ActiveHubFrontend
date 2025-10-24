import { UpdateUserDto, UpdateUserResponse } from '../../dtos/user/update-user.dto';
import { UserRepository } from '../../repositories/user.repository';

export class UpdateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(id: number, dto: UpdateUserDto): Promise<UpdateUserResponse> {
    return await this.repository.update(id, dto);
  }
}
