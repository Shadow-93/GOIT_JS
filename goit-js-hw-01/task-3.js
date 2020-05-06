let message = prompt('Enter password');
const ADMIN_PASSWORD = 'jqueryismyjam';

if (message === null) {
  message = 'Отменено пользователем!';
} else if (message.toLowerCase() === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);
