export interface Recurrence {
  id: number;
  eventId: number;
  frequency: string;
  interval: number;
  count: number | null;
  until: string | null;
  byDay: string | null;
  createdAt: string;
  updatedAt: string;
}

export class EventEntity {
  constructor(
    public id: number,
    public title: string,
    public startDate: string,
    public endDate: string,
    public status: string,
    public active: boolean,
    public userId: number,
    public groupId: number,
    public createdAt: string,
    public updatedAt: string,
    public recurrence?: Recurrence
  ) {}

  static fromObject(object: { [key: string]: any }): EventEntity {
    const {
      id,
      title,
      startDate,
      endDate,
      status,
      active,
      userId,
      groupId,
      createdAt,
      updatedAt,
      recurrence,
    } = object;

    if (!id) throw new Error('Id is required');
    if (!title) throw new Error('Title is required');
    if (!startDate) throw new Error('StartDate is required');
    if (!endDate) throw new Error('EndDate is required');

    return new EventEntity(
      id,
      title,
      startDate,
      endDate,
      status,
      active,
      userId,
      groupId,
      createdAt,
      updatedAt,
      recurrence
    );
  }

  get isRecurrent(): boolean {
    return !!this.recurrence;
  }
}
