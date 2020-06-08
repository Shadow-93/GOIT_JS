const counterRef = document.querySelector('#value');

const buttonDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);

const buttonIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);

let counterValue = Number(counterRef.textContent);

function decrement() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  counterRef.textContent = counterValue;
}

buttonDecrementRef.addEventListener('click', decrement);
buttonIncrementRef.addEventListener('click', increment);
