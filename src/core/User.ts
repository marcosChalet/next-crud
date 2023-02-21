import Person from './Person';

export default class User extends Person {
  constructor(
    protected _name: string,
    protected _uid: string,
    private _email: string,
    private _password: string,
    private _isAuthenticated: boolean = false,
    private _emailVerified: boolean = false,
  ) {
    super(_name, _uid);
  }

  static empty(uid: string) {
    return new User('', uid, '', '');
  }

  get email() {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }

  get emailVerified() {
    return this._emailVerified;
  }

  set emailVerified(emailVerified: boolean) {
    this._emailVerified = emailVerified;
  }
}
