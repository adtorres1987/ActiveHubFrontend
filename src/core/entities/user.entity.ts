export interface Person {
  id: number;
  name: string;
  lastname: string;
  createdAt: string;
  updatedAt: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
}

export interface UserRole {
  id: number;
  userId: number;
  rolId: number;
  rol: Role;
}

export class UserEntity {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public image: string | null,
    public active: boolean,
    public emailValidated: boolean,
    public phone: string | null,
    public createdAt: string,
    public updatedAt: string,
    public person?: Person,
    public roles?: UserRole[]
  ) {}

  static fromObject(object: { [key: string]: any }): UserEntity {
    const {
      id,
      username,
      email,
      image,
      active,
      emailValidated,
      phone,
      createdAt,
      updatedAt,
      person,
      roles,
    } = object;

    if (!id) throw new Error('Id is required');
    if (!username) throw new Error('Username is required');
    if (!email) throw new Error('Email is required');

    return new UserEntity(
      id,
      username,
      email,
      image || null,
      active,
      emailValidated,
      phone || null,
      createdAt,
      updatedAt,
      person,
      roles
    );
  }

  get fullName(): string {
    if (!this.person) return this.username;
    return `${this.person.name} ${this.person.lastname}`;
  }

  get roleNames(): string[] {
    if (!this.roles) return [];
    return this.roles.map((userRole) => userRole.rol.name);
  }
}
