import { useAuth } from '../../hooks/useAuth';
import { FiLogOut, FiUser, FiMoon, FiSun } from 'react-icons/fi';
import { useState } from 'react';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || false
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 fixed top-0 left-64 right-0 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Gestión de Eventos
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title={darkMode ? 'Modo claro' : 'Modo oscuro'}
          >
            {darkMode ? (
              <FiSun size={20} className="text-gray-600 dark:text-gray-300" />
            ) : (
              <FiMoon size={20} className="text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <FiUser size={20} className="text-gray-600 dark:text-gray-300" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {user?.fullName || user?.username}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {user?.email}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
            title="Cerrar sesión"
          >
            <FiLogOut size={20} />
            <span className="font-medium">Salir</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
