import { httpClient } from '../../config/axios.adapter';
import { CreateUserDto } from '../../core/dtos/user/create-user.dto';
import { UpdateUserDto } from '../../core/dtos/user/update-user.dto';

export class UserDatasourceImpl {
  async getAll(): Promise<any[]> {
    const response = await httpClient.get<{ users: any[] }>('/user');
    return response.users;
  }

  async getById(id: number): Promise<any> {
    const response = await httpClient.get<{ user: any }>(`/user/${id}`);
    return response.user;
  }

  async create(dto: CreateUserDto): Promise<any> {
    const response = await httpClient.post<{ user: any }>('/user', dto);
    return response.user;
  }

  async update(id: number, dto: UpdateUserDto): Promise<any> {
    const response = await httpClient.put<{ user: any }>(`/user/${id}`, dto);
    return response.user;
  }

  async delete(id: number): Promise<void> {
    await httpClient.delete(`/user/${id}`);
  }
}
