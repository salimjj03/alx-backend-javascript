export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  set code(newcode) {
    this._code = newcode;
  }

  set name(newname) {
    this._name = newname;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
