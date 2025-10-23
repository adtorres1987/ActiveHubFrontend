import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { registerSchema, RegisterDto } from '../../../core/dtos/auth/register.dto';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { ROUTES } from '../../../helpers/constants';
import { toast } from 'react-toastify';

export const RegisterPage = () => {
  const { register: registerUser, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      rolId: 1, // Default role
    },
  });

  const onSubmit = async (data: RegisterDto) => {
    const result = await registerUser(data);
    if (!result.success) {
      toast.error(result.error || 'Error al registrarse');
    } else {
      toast.success('Registro exitoso');
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Crear Cuenta
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Completa el formulario para registrarte
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Nombre"
            type="text"
            placeholder="Juan"
            error={errors.name?.message}
            {...register('name')}
          />

          <Input
            label="Apellido"
            type="text"
            placeholder="Pérez"
            error={errors.lastname?.message}
            {...register('lastname')}
          />
        </div>

        <Input
          label="Usuario"
          type="text"
          placeholder="juanperez"
          error={errors.username?.message}
          {...register('username')}
        />

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
          Registrarse
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          ¿Ya tienes una cuenta?{' '}
          <Link
            to={ROUTES.LOGIN}
            className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </Card>
  );
};
