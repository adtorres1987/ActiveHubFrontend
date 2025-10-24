import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { CreateUserDto, createUserSchema } from '../../../core/dtos/user/create-user.dto';

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateUserDto) => Promise<void>;
  loading: boolean;
}

export const CreateUserModal: React.FC<CreateUserModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  loading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUserDto>({
    resolver: zodResolver(createUserSchema),
  });

  const handleFormSubmit = async (data: CreateUserDto) => {
    // Clean empty strings and set defaults
    const cleanedData: CreateUserDto = {
      ...data,
      image: data.image || undefined,
      phone: data.phone || undefined,
      birthdate: data.birthdate || undefined,
      weight: data.weight || undefined,
      height: data.height || undefined,
      active: data.active ?? true,
      emailValidated: data.emailValidated ?? false,
    };

    console.log('Datos a enviar:', cleanedData);
    await onSubmit(cleanedData);
    reset();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  // TODO: Fetch roles from API
  const roleOptions = [
    { value: 1, label: 'Administrador' },
    { value: 2, label: 'Usuario' },
    { value: 3, label: 'Moderador' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Crear Nuevo Usuario" size="lg">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Datos de Usuario */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Datos de Usuario
            </h3>
          </div>

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
            label="Contraseña"
            type="password"
            placeholder="••••••••"
            error={errors.password?.message}
            {...register('password')}
          />

          <Input
            label="Teléfono"
            type="tel"
            placeholder="+1234567890"
            error={errors.phone?.message}
            {...register('phone')}
          />

          <Select
            label="Rol"
            options={roleOptions}
            error={errors.rolId?.message}
            {...register('rolId', { valueAsNumber: true })}
          />

          {/* Datos de Persona */}
          <div className="md:col-span-2 mt-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Datos Personales
            </h3>
          </div>

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

          <Input
            label="Fecha de Nacimiento"
            type="date"
            error={errors.birthdate?.message}
            {...register('birthdate')}
          />

          <Input
            label="Peso (kg)"
            type="text"
            placeholder="70"
            error={errors.weight?.message}
            {...register('weight')}
          />

          <Input
            label="Altura (cm)"
            type="text"
            placeholder="175"
            error={errors.height?.message}
            {...register('height')}
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
            Crear Usuario
          </Button>
        </div>
      </form>
    </Modal>
  );
};
