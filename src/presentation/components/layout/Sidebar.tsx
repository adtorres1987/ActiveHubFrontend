import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../helpers/constants';
import {
  FiHome,
  FiUsers,
  FiShield,
  FiGrid,
  FiMapPin,
  FiLayout,
  FiFolder,
  FiCalendar,
  FiClock,
} from 'react-icons/fi';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', path: ROUTES.DASHBOARD, icon: <FiHome size={20} /> },
  { label: 'Usuarios', path: ROUTES.USERS, icon: <FiUsers size={20} /> },
  { label: 'Roles', path: ROUTES.ROLES, icon: <FiShield size={20} /> },
  { label: 'Instituciones', path: ROUTES.INSTITUTIONS, icon: <FiGrid size={20} /> },
  { label: 'Sucursales', path: ROUTES.BRANCHES, icon: <FiMapPin size={20} /> },
  { label: 'Salas', path: ROUTES.ROOMS, icon: <FiLayout size={20} /> },
  { label: 'Grupos', path: ROUTES.GROUPS, icon: <FiFolder size={20} /> },
  { label: 'Eventos', path: ROUTES.EVENTS, icon: <FiCalendar size={20} /> },
  { label: 'Ocurrencias', path: ROUTES.OCCURRENCES, icon: <FiClock size={20} /> },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen fixed left-0 top-0 overflow-y-auto scrollbar-thin">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          Events App
        </h2>
      </div>

      <nav className="px-4 pb-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mb-1 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
