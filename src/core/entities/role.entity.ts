export class RoleEntity {
  constructor(
    public id: number,
    public name: string,
    public description: string
  ) {}

  static fromObject(object: { [key: string]: any }): RoleEntity {
    const { id, name, description } = object;

    if (!id) throw new Error('Id is required');
    if (!name) throw new Error('Name is required');
    if (!description) throw new Error('Description is required');

    return new RoleEntity(id, name, description);
  }
}
