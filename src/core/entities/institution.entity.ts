export class InstitutionEntity {
  constructor(
    public id: number,
    public name: string,
    public ein: string,
    public address: string | null,
    public phone: string | null,
    public email: string | null,
    public active: boolean,
    public createdAt: string,
    public updatedAt: string
  ) {}

  static fromObject(object: { [key: string]: any }): InstitutionEntity {
    const { id, name, ein, address, phone, email, active, createdAt, updatedAt } = object;

    if (!id) throw new Error('Id is required');
    if (!name) throw new Error('Name is required');
    if (!ein) throw new Error('EIN is required');

    return new InstitutionEntity(
      id,
      name,
      ein,
      address || null,
      phone || null,
      email || null,
      active,
      createdAt,
      updatedAt
    );
  }
}
