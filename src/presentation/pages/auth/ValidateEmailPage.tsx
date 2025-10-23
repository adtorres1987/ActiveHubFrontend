import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Loading } from '../../components/ui/Loading';
import { ROUTES } from '../../../helpers/constants';
import { AuthDatasourceImpl } from '../../../infrastructure/datasources/auth.datasource.impl';
import { AuthRepositoryImpl } from '../../../infrastructure/repositories/auth.repository.impl';
import { ValidateEmailUseCase } from '../../../core/use-cases/auth/validate-email.use-case';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const datasource = new AuthDatasourceImpl();
const repository = new AuthRepositoryImpl(datasource);
const validateEmailUseCase = new ValidateEmailUseCase(repository);

export const ValidateEmailPage = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const validateEmail = async () => {
      if (!token) {
        setMessage('Token de validación no encontrado');
        setSuccess(false);
        setLoading(false);
        return;
      }

      try {
        const response = await validateEmailUseCase.execute(token);
        setMessage(response.message || 'Email validado exitosamente');
        setSuccess(true);
      } catch (error: any) {
        setMessage(
          error.response?.data?.message ||
          error.message ||
          'Error al validar el email. El enlace puede haber expirado.'
        );
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    validateEmail();
  }, [token]);

  const handleGoToLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  if (loading) {
    return (
      <Card className="bg-white dark:bg-gray-800">
        <div className="text-center py-8">
          <Loading size="lg" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Validando tu correo electrónico...
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-white dark:bg-gray-800">
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          {success ? (
            <FiCheckCircle className="w-16 h-16 text-green-500" />
          ) : (
            <FiXCircle className="w-16 h-16 text-red-500" />
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {success ? '¡Email Validado!' : 'Error de Validación'}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {message}
        </p>

        {success ? (
          <Button
            variant="primary"
            onClick={handleGoToLogin}
            className="w-full"
          >
            Ir a Iniciar Sesión
          </Button>
        ) : (
          <div className="space-y-3">
            <Button
              variant="secondary"
              onClick={handleGoToLogin}
              className="w-full"
            >
              Volver al Login
            </Button>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Si necesitas un nuevo enlace de validación, contacta con el administrador.
            </p>
          </div>
        )}

        <div className="mt-6">
          <Link
            to={ROUTES.REGISTER}
            className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
          >
            ¿No tienes cuenta? Regístrate aquí
          </Link>
        </div>
      </div>
    </Card>
  );
};
