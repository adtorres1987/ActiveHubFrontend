export class GroupEntity {
  constructor(
    public id: number,
    public name: string,
    public active: boolean
  ) {}

  static fromObject(object: { [key: string]: any }): GroupEntity {
    const { id, name, active } = object;

    if (!id) throw new Error('Id is required');
    if (!name) throw new Error('Name is required');

    return new GroupEntity(id, name, active);
  }
}
