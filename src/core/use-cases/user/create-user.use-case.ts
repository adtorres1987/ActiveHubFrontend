import { CreateUserDto, CreateUserResponse } from '../../dtos/user/create-user.dto';
import { UserRepository } from '../../repositories/user.repository';

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(dto: CreateUserDto): Promise<CreateUserResponse> {
    return await this.repository.create(dto);
  }
}
