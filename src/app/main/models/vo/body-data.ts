export class BodyData {
  public id: string = undefined;
  public height: number = undefined;
  public weight: number = undefined;
  public date: string = undefined;
  static selectId: (item: BodyData) => string = item => item.id;
}
