import { CreateUserDto } from '../dtos/user/create-user.dto';
import { UpdateUserDto } from '../dtos/user/update-user.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract getAll(): Promise<UserEntity[]>;
  abstract getById(id: number): Promise<UserEntity>;
  abstract create(dto: CreateUserDto): Promise<UserEntity>;
  abstract update(id: number, dto: UpdateUserDto): Promise<UserEntity>;
  abstract delete(id: number): Promise<void>;
}
