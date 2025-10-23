export class BranchEntity {
  constructor(
    public id: number,
    public name: string,
    public address: string | null,
    public phone: string | null,
    public email: string | null,
    public active: boolean,
    public institutionId: number,
    public createdAt: string,
    public updatedAt: string
  ) {}

  static fromObject(object: { [key: string]: any }): BranchEntity {
    const { id, name, address, phone, email, active, institutionId, createdAt, updatedAt } =
      object;

    if (!id) throw new Error('Id is required');
    if (!name) throw new Error('Name is required');
    if (!institutionId) throw new Error('InstitutionId is required');

    return new BranchEntity(
      id,
      name,
      address || null,
      phone || null,
      email || null,
      active,
      institutionId,
      createdAt,
      updatedAt
    );
  }
}
