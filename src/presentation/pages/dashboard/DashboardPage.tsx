import { Card } from '../../components/ui/Card';
import { FiUsers, FiCalendar, FiGrid, FiClock } from 'react-icons/fi';

export const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="border-l-4 border-l-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Usuarios</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                0
              </p>
            </div>
            <FiUsers size={32} className="text-blue-500" />
          </div>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Eventos</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                0
              </p>
            </div>
            <FiCalendar size={32} className="text-green-500" />
          </div>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Instituciones</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                0
              </p>
            </div>
            <FiGrid size={32} className="text-purple-500" />
          </div>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ocurrencias</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">
                0
              </p>
            </div>
            <FiClock size={32} className="text-orange-500" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Actividad Reciente">
          <p className="text-gray-600 dark:text-gray-400">
            No hay actividad reciente para mostrar.
          </p>
        </Card>

        <Card title="Eventos Próximos">
          <p className="text-gray-600 dark:text-gray-400">
            No hay eventos próximos programados.
          </p>
        </Card>
      </div>
    </div>
  );
};
