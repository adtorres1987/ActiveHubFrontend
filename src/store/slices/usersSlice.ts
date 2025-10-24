import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserListItem, PaginationInfo } from '../../core/dtos/user/user-list.dto';

interface UsersState {
  users: UserListItem[];
  pagination: PaginationInfo;
  selectedUser: UserListItem | null;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  },
  selectedUser: null,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Get All Users
    getUsersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (
      state,
      action: PayloadAction<{ users: UserListItem[]; pagination: PaginationInfo }>
    ) => {
      state.loading = false;
      state.users = action.payload.users;
      state.pagination = action.payload.pagination;
      state.error = null;
    },
    getUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Create User
    createUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createUserSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    createUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update User
    updateUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete User
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Set Selected User
    setSelectedUser: (state, action: PayloadAction<UserListItem | null>) => {
      state.selectedUser = action.payload;
    },

    // Clear Error
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
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
  setSelectedUser,
  clearError,
} = usersSlice.actions;

export default usersSlice.reducer;
