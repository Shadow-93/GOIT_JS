// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет
// хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения
// и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и
// обновление интерфейса

const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const buttonDecrementRef = document.querySelectorAll(
  'button[data-action="decrement"]'
  );
const buttonIncrementRef = document.querySelectorAll(
  'button[data-action="increment"]'
  );

buttonDecrementRef.addEventListener('clik', event => {
    event.target})
