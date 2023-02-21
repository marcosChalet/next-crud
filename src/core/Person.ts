import PersonInterface from './Person.interface';

export default class Person implements PersonInterface {
  constructor(protected _name: string, protected _uid: string) {}

  empty(uid: string): Person {
    return new Person('', uid);
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get uid() {
    return this._uid;
  }

  set uid(uid: string) {
    this._uid = uid;
  }
}
