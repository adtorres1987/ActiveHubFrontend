import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { UpdateUserDto, updateUserSchema } from '../../../core/dtos/user/update-user.dto';
import { UserListItem } from '../../../core/dtos/user/user-list.dto';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (id: number, data: UpdateUserDto) => Promise<void>;
  loading: boolean;
  user: UserListItem | null;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  loading,
  user,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<UpdateUserDto>({
    resolver: zodResolver(updateUserSchema),
  });

  useEffect(() => {
    if (user) {
      setValue('username', user.username);
      setValue('email', user.email);
      setValue('phone', user.phone || '');
      setValue('active', user.active);
      setValue('emailValidated', user.emailValidated);
    }
  }, [user, setValue]);

  const handleFormSubmit = async (data: UpdateUserDto) => {
    if (user) {
      await onSubmit(user.id, data);
      reset();
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!user) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Editar Usuario" size="lg">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Usuario"
            type="text"
            placeholder="nombre_usuario"
            error={errors.username?.message}
            {...register('username')}
          />

          <Input
            label="Email"
            type="email"
            placeholder="usuario@ejemplo.com"
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="Nueva Contraseña"
            type="password"
            placeholder="Dejar en blanco para no cambiar"
            error={errors.password?.message}
            {...register('password')}
            helperText="Dejar en blanco si no desea cambiar la contraseña"
          />

          <Input
            label="Teléfono"
            type="tel"
            placeholder="+1234567890"
            error={errors.phone?.message}
            {...register('phone')}
          />

          {/* Checkboxes */}
          <div className="md:col-span-2 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 dark:border-gray-600 text-primary-600 focus:ring-primary-500"
                {...register('active')}
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Usuario Activo
              </span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 dark:border-gray-600 text-primary-600 focus:ring-primary-500"
                {...register('emailValidated')}
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Email Validado
              </span>
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button type="button" variant="secondary" onClick={handleClose} disabled={loading}>
            Cancelar
          </Button>
          <Button type="submit" variant="primary" isLoading={loading}>
            Guardar Cambios
          </Button>
        </div>
      </form>
    </Modal>
  );
};
