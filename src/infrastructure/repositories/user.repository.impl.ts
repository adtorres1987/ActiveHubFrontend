import { UserRepository } from '../../core/repositories/user.repository';
import { CreateUserDto } from '../../core/dtos/user/create-user.dto';
import { UpdateUserDto } from '../../core/dtos/user/update-user.dto';
import { UserEntity } from '../../core/entities/user.entity';
import { UserDatasourceImpl } from '../datasources/user.datasource.impl';

export class UserRepositoryImpl extends UserRepository {
  constructor(private readonly datasource: UserDatasourceImpl) {
    super();
  }

  async getAll(): Promise<UserEntity[]> {
    const users = await this.datasource.getAll();
    return users.map((user) => UserEntity.fromObject(user));
  }

  async getById(id: number): Promise<UserEntity> {
    const user = await this.datasource.getById(id);
    return UserEntity.fromObject(user);
  }

  async create(dto: CreateUserDto): Promise<UserEntity> {
    const user = await this.datasource.create(dto);
    return UserEntity.fromObject(user);
  }

  async update(id: number, dto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.datasource.update(id, dto);
    return UserEntity.fromObject(user);
  }

  async delete(id: number): Promise<void> {
    await this.datasource.delete(id);
  }
}
