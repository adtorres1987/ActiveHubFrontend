import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { loginSchema, LoginDto } from '../../../core/dtos/auth/login.dto';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { ROUTES } from '../../../helpers/constants';
import { toast, ToastContainer } from 'react-toastify';

export const LoginPage = () => {
  const { login, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginDto) => {
    const result = await login(data);
    if (!result.success) {
      toast.error(result.error || 'Error al iniciar sesión');
    } else {
      toast.success('Sesión iniciada correctamente');
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Iniciar Sesión
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Ingresa tus credenciales para acceder
        </p>
      </div>

      <ToastContainer />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Correo Electrónico"
          type="email"
          placeholder="correo@ejemplo.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register('password')}
        />

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          isLoading={loading}
        >
          Iniciar Sesión
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ¿No tienes una cuenta?{' '}
          <Link
            to={ROUTES.REGISTER}
            className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            Regístrate aquí
          </Link>
        </p>
      </div>
    </Card>
  );
};
