import { httpClient } from '../../config/axios.adapter';
import { CreateUserDto, CreateUserResponse } from '../../core/dtos/user/create-user.dto';
import { UpdateUserDto, UpdateUserResponse } from '../../core/dtos/user/update-user.dto';
import { GetUsersResponse } from '../../core/dtos/user/user-list.dto';

export class UserDatasourceImpl {
  async getAll(page: number = 1, limit: number = 10): Promise<GetUsersResponse> {
    const response = await httpClient.get<GetUsersResponse>(`/user?page=${page}&limit=${limit}`);
    return response;
  }

  async getById(id: number): Promise<UpdateUserResponse> {
    const response = await httpClient.get<UpdateUserResponse>(`/user/${id}`);
    return response;
  }

  async create(dto: CreateUserDto): Promise<CreateUserResponse> {
    const response = await httpClient.post<CreateUserResponse>('/user', dto);
    return response;
  }

  async update(id: number, dto: UpdateUserDto): Promise<UpdateUserResponse> {
    const response = await httpClient.put<UpdateUserResponse>(`/user/${id}`, dto);
    return response;
  }

  async delete(id: number): Promise<UpdateUserResponse> {
    const response = await httpClient.delete<UpdateUserResponse>(`/user/${id}`);
    return response;
  }
}
