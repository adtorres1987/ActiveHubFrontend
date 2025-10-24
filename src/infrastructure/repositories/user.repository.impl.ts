import { UserRepository } from '../../core/repositories/user.repository';
import { CreateUserDto, CreateUserResponse } from '../../core/dtos/user/create-user.dto';
import { UpdateUserDto, UpdateUserResponse } from '../../core/dtos/user/update-user.dto';
import { GetUsersResponse } from '../../core/dtos/user/user-list.dto';
import { UserDatasourceImpl } from '../datasources/user.datasource.impl';

export class UserRepositoryImpl extends UserRepository {
  constructor(private readonly datasource: UserDatasourceImpl) {
    super();
  }

  async getAll(page: number = 1, limit: number = 10): Promise<GetUsersResponse> {
    return await this.datasource.getAll(page, limit);
  }

  async getById(id: number): Promise<UpdateUserResponse> {
    return await this.datasource.getById(id);
  }

  async create(dto: CreateUserDto): Promise<CreateUserResponse> {
    return await this.datasource.create(dto);
  }

  async update(id: number, dto: UpdateUserDto): Promise<UpdateUserResponse> {
    return await this.datasource.update(id, dto);
  }

  async delete(id: number): Promise<UpdateUserResponse> {
    return await this.datasource.delete(id);
  }
}
