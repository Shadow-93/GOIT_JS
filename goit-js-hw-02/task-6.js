let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (input === null) {
    console.log('Отменено пользователем');
    break;
  }
  input = Number(input);
  numbers.push(input);
  const testIsNan = Number.isNaN(input);

  if (testIsNan) {
    alert('Было введено не число, попробуйте еще раз');
    continue; // eslint-disable-line
  }
} while (true); // eslint-disable-line
// eslint-disable-next-line
for (let number of numbers) {
  number += input;
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
