let credits = 23580;
const pricePerDroid = 3000;
let message = prompt('Сколько дроидов Вы желаете приобрести?');
const totalPrice = Number(message) * pricePerDroid;

if (message === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
  console.log(message);
} else {
  credits -= totalPrice;
  message = `Вы купили ${message} дроидов, на счету осталось ${credits} кредитов.`;
  console.log(message);
}
