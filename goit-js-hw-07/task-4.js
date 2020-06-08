// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет
// хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения
// и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и
// обновление интерфейса

const counterValue = document.querySelector('#value');
counterValue.textContent = Number(0);
console.log(counterValue.textContent);

const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]'
);

buttonDecrementRef.addEventListener('clik', increment);

function increment(event) { 
  counterValue.textContent -= 1;
};