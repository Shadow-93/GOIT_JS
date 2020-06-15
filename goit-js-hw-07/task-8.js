// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const boxesRef = document.querySelector('#boxes');
const newBoxes = [];
const newBox = document.createElement('div');
newBox.style.width = '30px';
newBox.style.height = '30px';
console.dir(newBox);
const renderRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
boxesRef.append(newBox);

// renderRef.addEventListener('click');
// destroyRef.addEventListener('click');

// function randColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const bgColor = `${r},${g},${b}`;
//   return bgColor;
// }

// const controlsRef = document.querySelector('#controls');
// const inputRef = controlsRef.firstElementChild;
// const createBtnRef = controlsRef.querySelector('button[data-action="render"]');
// const clearBtnRef = controlsRef.querySelector('button[data-action="destroy"]');
// const boxesRef = document.querySelector('#boxes');
// let width = 30;
// let height = 30;
// let boxItemsRef = [];

// const randomBgColor = () => {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   const bgColor = `rgb(${r},${g},${b})`;
//   return bgColor;
// };

// const createBox = () => {
//   const boxRef = document.createElement('div');
//   boxRef.style.width = `${width}px`;
//   boxRef.style.height = `${height}px`;
//   boxRef.style.backgroundColor = randomBgColor();
//   return boxRef;
// };

// const createBoxes = amount => {
//   for (let i = 0; i < amount; i += 1) {
//     boxItemsRef.push(createBox());
//     width += 10;
//     height += 10;
//   }
//   boxesRef.append(...boxItemsRef);
// };

// createBtnRef.addEventListener('click', () => {
//   createBoxes(Number(inputRef.value));
// });

// clearBtnRef.addEventListener('click', () => {
//   while (boxesRef.firstChild) {
//     boxesRef.firstChild.remove();
//   }
//   boxItemsRef = [];
//   width = 30;
//   height = 30;
// });
renderRef.addEventListener('click');
destroyRef.addEventListener('click');
