import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { FiPlus } from 'react-icons/fi';

export const InstitutionsListPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Instituciones
        </h1>
        <Button variant="primary">
          <FiPlus className="inline mr-2" />
          Nueva Institución
        </Button>
      </div>

      <Card>
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            Funcionalidad de gestión de instituciones en desarrollo...
          </p>
        </div>
      </Card>
    </div>
  );
};
