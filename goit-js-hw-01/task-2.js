const total = 100;
const ordered = 101;

if (total >= ordered) {
  console.log(`Заказ оформлен, с вами свяжется менеджер`);
} else if (total < ordered) {
  console.log(`На складе недостаточно твоаров!`);
}
