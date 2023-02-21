import Person from './Person';

export default class Client extends Person {
  constructor(
    protected _name: string,
    protected _age: number,
    protected _id: string = '',
    protected _uid: string,
  ) {
    super(_name, _uid);
  }

  static empty(uid: string) {
    return new Client('', 0, '', uid);
  }

  get id() {
    return this._id;
  }

  get age() {
    return this._age;
  }
}
