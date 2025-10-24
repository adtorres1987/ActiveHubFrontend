export interface UserListItem {
  id: number;
  username: string;
  email: string;
  image: string | null;
  phone: string | null;
  emailValidated: boolean;
  active: boolean;
  roleId: number;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface GetUsersResponse {
  users: UserListItem[];
  pagination: PaginationInfo;
}
