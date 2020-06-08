const categoriesRef = document.querySelectorAll('.item');
categoriesRef.forEach(categorie => {
  console.log(
    `В списке ${categoriesRef.length} категории.
    Категория: ${categorie.firstElementChild.textContent}
    Количество элементов: ${categorie.lastElementChild.childElementCount}`,
  );
});
