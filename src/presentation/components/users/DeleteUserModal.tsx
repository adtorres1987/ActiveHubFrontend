import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { UserListItem } from '../../../core/dtos/user/user-list.dto';
import { FiAlertTriangle } from 'react-icons/fi';

interface DeleteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: number) => Promise<void>;
  loading: boolean;
  user: UserListItem | null;
}

export const DeleteUserModal: React.FC<DeleteUserModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  user,
}) => {
  const handleConfirm = async () => {
    if (user) {
      await onConfirm(user.id);
      onClose();
    }
  };

  if (!user) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirmar Eliminación" size="md">
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <FiAlertTriangle className="text-red-600 dark:text-red-400 flex-shrink-0" size={24} />
          <div>
            <p className="text-sm text-red-800 dark:text-red-200 font-medium">
              Esta acción no se puede deshacer
            </p>
            <p className="text-sm text-red-600 dark:text-red-300 mt-1">
              Se eliminará permanentemente el usuario del sistema.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-700 dark:text-gray-300">
            ¿Está seguro que desea eliminar el siguiente usuario?
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-2">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">ID: </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {user.id}
              </span>
            </div>
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Usuario: </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {user.username}
              </span>
            </div>
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Email: </span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {user.email}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button type="button" variant="secondary" onClick={onClose} disabled={loading}>
            Cancelar
          </Button>
          <Button type="button" variant="danger" onClick={handleConfirm} isLoading={loading}>
            Eliminar Usuario
          </Button>
        </div>
      </div>
    </Modal>
  );
};
