import { CreateUserDto, CreateUserResponse } from '../dtos/user/create-user.dto';
import { UpdateUserDto, UpdateUserResponse } from '../dtos/user/update-user.dto';
import { GetUsersResponse } from '../dtos/user/user-list.dto';

export abstract class UserRepository {
  abstract getAll(page: number, limit: number): Promise<GetUsersResponse>;
  abstract getById(id: number): Promise<UpdateUserResponse>;
  abstract create(dto: CreateUserDto): Promise<CreateUserResponse>;
  abstract update(id: number, dto: UpdateUserDto): Promise<UpdateUserResponse>;
  abstract delete(id: number): Promise<UpdateUserResponse>;
}
