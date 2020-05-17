// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

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
