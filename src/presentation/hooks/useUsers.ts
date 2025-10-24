import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  getAllUsers as getAllUsersThunk,
  getUserById as getUserByIdThunk,
  createUser as createUserThunk,
  updateUser as updateUserThunk,
  deleteUser as deleteUserThunk,
} from '../../store/thunks/usersThunks';
import { setSelectedUser, clearError } from '../../store/slices/usersSlice';
import { CreateUserDto } from '../../core/dtos/user/create-user.dto';
import { UpdateUserDto } from '../../core/dtos/user/update-user.dto';
import { UserListItem } from '../../core/dtos/user/user-list.dto';

export const useUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, pagination, selectedUser, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const getAllUsers = async (page: number = 1, limit: number = 10) => {
    const result = await dispatch(getAllUsersThunk(page, limit));
    console.log(result);
    return result;
  };

  const getUserById = async (id: number) => {
    const result = await dispatch(getUserByIdThunk(id));
    return result;
  };

  const createUser = async (createUserDto: CreateUserDto) => {
    const result = await dispatch(createUserThunk(createUserDto));
    if (result.success) {
      // Refresh the users list after creating
      await getAllUsers(pagination.page, pagination.limit);
    }
    return result;
  };

  const updateUser = async (id: number, updateUserDto: UpdateUserDto) => {
    const result = await dispatch(updateUserThunk(id, updateUserDto));
    if (result.success) {
      // Refresh the users list after updating
      await getAllUsers(pagination.page, pagination.limit);
    }
    return result;
  };

  const deleteUser = async (id: number) => {
    const result = await dispatch(deleteUserThunk(id));
    if (result.success) {
      // Refresh the users list after deleting
      await getAllUsers(pagination.page, pagination.limit);
    }
    return result;
  };

  const selectUser = (user: UserListItem | null) => {
    dispatch(setSelectedUser(user));
  };

  const clearUserError = () => {
    dispatch(clearError());
  };

  return {
    users,
    pagination,
    selectedUser,
    loading,
    error,
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    selectUser,
    clearUserError,
  };
};
