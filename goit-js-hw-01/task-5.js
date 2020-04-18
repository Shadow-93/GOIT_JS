const country = prompt('Введите страну доставки');
let price;

switch (country) {
  case 'Китай': {
    price = 100;
    break;
  }
  case 'Чили': {
    price = 250;
    break;
  }
  case 'Австралия': {
    price = 170;
    break;
  }
  case 'Индия': {
    price = 80;
    break;
  }
  case 'Ямайка': {
    price = 120;
    break;
  }
  default:
    alert('В вашей стране доставка не доступна');
}

if (country === null) {
  console.log('Отменено пользователем');
} else {
  const message = `Доставка в ${country} будет стоить ${price} кредитов`;
  console.log(message);
}
