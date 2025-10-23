import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppRouter } from './presentation/routes/AppRouter';
import { renewToken } from './store/thunks/authThunks';
import { setUser } from './store/slices/authSlice';
import type { AppDispatch } from './store/store';
import { STORAGE_KEYS } from './helpers/constants';
import { UserEntity } from './core/entities/user.entity';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if user has tokens in localStorage
        const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
        const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
        const userStr = localStorage.getItem(STORAGE_KEYS.USER);

        if (refreshToken && accessToken && userStr) {
          // Restore user from localStorage
          const user = JSON.parse(userStr);
          dispatch(setUser(UserEntity.fromObject(user)));

          // Optionally renew token to ensure it's fresh
          await dispatch(renewToken());
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeAuth();
  }, [dispatch]);

  useEffect(() => {
    // Initialize dark mode from localStorage
    const theme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Show loading screen while initializing
  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando...</p>
        </div>
      </div>
    );
  }

  return <AppRouter />;
}

export default App;
