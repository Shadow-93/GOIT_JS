// eslint-disable-next-line
const findBestEmployee = function(employees) {
  const entries = Object.entries(employees);
  // eslint-disable-next-line
  for (const entry of entries) {
    if (entry[1] === Math.max(...Object.values(employees))) {
      return entry[0];
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
