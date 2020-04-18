let message = prompt('Enter password');
const ADMIN_PASSWORD = 'jqueryismyjam';

if (message === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}
