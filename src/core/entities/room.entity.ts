export class RoomEntity {
  constructor(
    public id: number,
    public name: string,
    public capacity: number | null,
    public location: string | null,
    public available: boolean,
    public active: boolean,
    public branchId: number,
    public createdAt: string,
    public updatedAt: string
  ) {}

  static fromObject(object: { [key: string]: any }): RoomEntity {
    const { id, name, capacity, location, available, active, branchId, createdAt, updatedAt } =
      object;

    if (!id) throw new Error('Id is required');
    if (!name) throw new Error('Name is required');
    if (!branchId) throw new Error('BranchId is required');

    return new RoomEntity(
      id,
      name,
      capacity || null,
      location || null,
      available,
      active,
      branchId,
      createdAt,
      updatedAt
    );
  }
}
