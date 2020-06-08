const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsRef = document.querySelector('#ingredients');

const createCard = product => {
  const listItemsRef = document.createElement('li');
  listItemsRef.textContent = product;
  return listItemsRef;
};

const itemRef = ingredients.map(product => createCard(product));

ingridientsRef.append(...itemRef);
