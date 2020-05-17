class StringBuilder {
  constructor(value) {
    this._value = value; // eslint-disable-line
  }

  get value() {
    return this._value; // eslint-disable-line
  }

  append(str) {
    this._value += str; // eslint-disable-line
  }

  prepend(str) {
    this._value = str + this._value; // eslint-disable-line
  }

  pad(str) {
    this._value = str + this._value + str; // eslint-disable-line
  }
}

const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
