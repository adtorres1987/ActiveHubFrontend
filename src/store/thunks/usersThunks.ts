import { AppDispatch } from '../store';
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  createUserStart,
  createUserSuccess,
  createUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from '../slices/usersSlice';
import { UserDatasourceImpl } from '../../infrastructure/datasources/user.datasource.impl';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.impl';
import { GetAllUsersUseCase } from '../../core/use-cases/user/get-all-users.use-case';
import { GetUserByIdUseCase } from '../../core/use-cases/user/get-user-by-id.use-case';
import { CreateUserUseCase } from '../../core/use-cases/user/create-user.use-case';
import { UpdateUserUseCase } from '../../core/use-cases/user/update-user.use-case';
import { DeleteUserUseCase } from '../../core/use-cases/user/delete-user.use-case';
import { CreateUserDto } from '../../core/dtos/user/create-user.dto';
import { UpdateUserDto } from '../../core/dtos/user/update-user.dto';
import { handleApiError } from '../../helpers/errors';

// Setup dependencies
const datasource = new UserDatasourceImpl();
const repository = new UserRepositoryImpl(datasource);
const getAllUsersUseCase = new GetAllUsersUseCase(repository);
const getUserByIdUseCase = new GetUserByIdUseCase(repository);
const createUserUseCase = new CreateUserUseCase(repository);
const updateUserUseCase = new UpdateUserUseCase(repository);
const deleteUserUseCase = new DeleteUserUseCase(repository);

export const getAllUsers = (page: number = 1, limit: number = 10) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getUsersStart());
    const response = await getAllUsersUseCase.execute(page, limit);
    dispatch(getUsersSuccess(response));
    return { success: true, data: response };
  } catch (error: any) {
    const errorMessage = handleApiError(error);
    dispatch(getUsersFailure(errorMessage));
    return { success: false, error: errorMessage };
  }
};

export const getUserById = (id: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await getUserByIdUseCase.execute(id);
    return { success: true, data: response };
  } catch (error: any) {
    const errorMessage = handleApiError(error);
    return { success: false, error: errorMessage };
  }
};

export const createUser = (createUserDto: CreateUserDto) => async (dispatch: AppDispatch) => {
  try {
    dispatch(createUserStart());
    console.log('Creating user with data:', createUserDto);
    const response = await createUserUseCase.execute(createUserDto);
    console.log('User created successfully:', response);
    dispatch(createUserSuccess());
    return { success: true, data: response };
  } catch (error: any) {
    console.error('Error creating user:', error);
    const errorMessage = handleApiError(error);
    dispatch(createUserFailure(errorMessage));
    return { success: false, error: errorMessage };
  }
};

export const updateUser = (id: number, updateUserDto: UpdateUserDto) => async (dispatch: AppDispatch) => {
  try {
    dispatch(updateUserStart());
    const response = await updateUserUseCase.execute(id, updateUserDto);
    dispatch(updateUserSuccess());
    return { success: true, data: response };
  } catch (error: any) {
    const errorMessage = handleApiError(error);
    dispatch(updateUserFailure(errorMessage));
    return { success: false, error: errorMessage };
  }
};

export const deleteUser = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(deleteUserStart());
    const response = await deleteUserUseCase.execute(id);
    dispatch(deleteUserSuccess());
    return { success: true, data: response };
  } catch (error: any) {
    const errorMessage = handleApiError(error);
    dispatch(deleteUserFailure(errorMessage));
    return { success: false, error: errorMessage };
  }
};
