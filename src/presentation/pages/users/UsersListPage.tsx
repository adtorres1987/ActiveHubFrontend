import { useEffect, useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Table } from '../../components/ui/Table';
import { Pagination } from '../../components/ui/Pagination';
import { FiPlus, FiEdit2, FiTrash2, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { useUsers } from '../../hooks/useUsers';
import { UserListItem } from '../../../core/dtos/user/user-list.dto';
import { CreateUserModal } from '../../components/users/CreateUserModal';
import { EditUserModal } from '../../components/users/EditUserModal';
import { DeleteUserModal } from '../../components/users/DeleteUserModal';
import { CreateUserDto } from '../../../core/dtos/user/create-user.dto';
import { UpdateUserDto } from '../../../core/dtos/user/update-user.dto';

export const UsersListPage = () => {
  const {
    users,
    pagination,
    selectedUser,
    loading,
    error,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    selectUser,
    clearUserError
  } = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    loadUsers(currentPage);
  }, [currentPage]);

  const loadUsers = async (page: number) => {
    await getAllUsers(page, 10);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEdit = (user: UserListItem) => {
    selectUser(user);
    setShowEditModal(true);
  };

  const handleDelete = (user: UserListItem) => {
    selectUser(user);
    setShowDeleteModal(true);
  };

  const handleCreateUser = async (data: CreateUserDto) => {
    const result = await createUser(data);
    if (result.success) {
      setShowCreateModal(false);
      selectUser(null);
    }
  };

  const handleUpdateUser = async (id: number, data: UpdateUserDto) => {
    const result = await updateUser(id, data);
    if (result.success) {
      setShowEditModal(false);
      selectUser(null);
    }
  };

  const handleDeleteUser = async (id: number) => {
    const result = await deleteUser(id);
    if (result.success) {
      setShowDeleteModal(false);
      selectUser(null);
    }
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
    clearUserError();
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    selectUser(null);
    clearUserError();
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    selectUser(null);
    clearUserError();
  };

  const columns = [
    // {
    //   header: 'ID',
    //   accessor: 'id' as keyof UserListItem,
    // },
    {
      header: 'Usuario',
      accessor: 'username' as keyof UserListItem,
    },
    {
      header: 'Email',
      accessor: 'email' as keyof UserListItem,
    },
    {
      header: 'Teléfono',
      accessor: ((row: UserListItem) => row.phone || 'N/A') as any,
    },
    {
      header: 'Email Validado',
      accessor: ((row: UserListItem) => (
        <div className="flex items-center">
          {row.emailValidated ? (
            <FiCheckCircle className="text-green-500" size={20} />
          ) : (
            <FiXCircle className="text-red-500" size={20} />
          )}
        </div>
      )) as any,
    },
    {
      header: 'Estado',
      accessor: ((row: UserListItem) => (
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            row.active
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}
        >
          {row.active ? 'Activo' : 'Inactivo'}
        </span>
      )) as any,
    },
    {
      header: 'Acciones',
      accessor: ((row: UserListItem) => (
        <div className="flex gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handleEdit(row)}
            title="Editar"
          >
            <FiEdit2 size={16} />
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDelete(row)}
            title="Eliminar"
          >
            <FiTrash2 size={16} />
          </Button>
        </div>
      )) as any,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Usuarios
        </h1>
        <Button variant="primary" onClick={() => setShowCreateModal(true)}>
          <FiPlus className="inline mr-2" />
          Nuevo Usuario
        </Button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded">
          {typeof error === 'string' ? error : JSON.stringify(error)}
        </div>
      )}

      <Card>
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Cargando usuarios...</p>
          </div>
        ) : (
          <>
            <Table<UserListItem>
              data={users}
              columns={columns}
              emptyMessage="No hay usuarios registrados"
            />
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              totalItems={pagination.total}
              itemsPerPage={pagination.limit}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </Card>

      {/* Modals */}
      <CreateUserModal
        isOpen={showCreateModal}
        onClose={handleCloseCreateModal}
        onSubmit={handleCreateUser}
        loading={loading}
      />

      <EditUserModal
        isOpen={showEditModal}
        onClose={handleCloseEditModal}
        onSubmit={handleUpdateUser}
        loading={loading}
        user={selectedUser}
      />

      <DeleteUserModal
        isOpen={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteUser}
        loading={loading}
        user={selectedUser}
      />
    </div>
  );
};
