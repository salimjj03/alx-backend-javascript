export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(nm) {
    if (typeof nm === 'string') {
      this._name = nm;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(len) {
    if (typeof len === 'number') {
      this._length = len;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(std) {
    if (Array.isArray(std) && std.every((element) => typeof element === 'string')) {
      this._students = std;
    } else {
      throw new TypeError('Students must be an array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
