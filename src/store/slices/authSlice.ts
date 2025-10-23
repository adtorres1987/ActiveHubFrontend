import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserEntity } from '../../core/entities/user.entity';
import { STORAGE_KEYS } from '../../helpers/constants';

interface AuthState {
  isAuthenticated: boolean;
  user: UserEntity | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN) || null,
  refreshToken: localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN) || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{ user: any; accessToken: string; refreshToken?: string }>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = UserEntity.fromObject(action.payload.user);
      state.accessToken = action.payload.accessToken;
      if (action.payload.refreshToken) {
        state.refreshToken = action.payload.refreshToken;
      }
      state.error = null;

      // Persist to localStorage
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, action.payload.accessToken);
      if (action.payload.refreshToken) {
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, action.payload.refreshToken);
      }
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(action.payload.user));
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;

      // Clear localStorage
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
    },
    setUser: (state, action: PayloadAction<UserEntity>) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      // Restore tokens from localStorage if they exist
      const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
      const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

      if (accessToken) {
        state.accessToken = accessToken;
      }
      if (refreshToken) {
        state.refreshToken = refreshToken;
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, setUser, clearError } =
  authSlice.actions;

export default authSlice.reducer;
