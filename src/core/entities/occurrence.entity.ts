export class OccurrenceEntity {
  constructor(
    public id: number,
    public eventId: number,
    public date: string,
    public duration: number,
    public status: string,
    public roomId: number | null,
    public createdAt: string,
    public updatedAt: string
  ) {}

  static fromObject(object: { [key: string]: any }): OccurrenceEntity {
    const { id, eventId, date, duration, status, roomId, createdAt, updatedAt } = object;

    if (!id) throw new Error('Id is required');
    if (!eventId) throw new Error('EventId is required');
    if (!date) throw new Error('Date is required');
    if (!duration) throw new Error('Duration is required');

    return new OccurrenceEntity(
      id,
      eventId,
      date,
      duration,
      status,
      roomId || null,
      createdAt,
      updatedAt
    );
  }
}
