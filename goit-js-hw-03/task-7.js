// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы 
// с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let tid = 0;
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

    /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  
  createTransaction(amount, type) {
    this.transactions.push({amount: amount, type: type, id:tid+=1});
    return this.transactions;
    },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance+=amount;
    this.createTransaction(amount, 'DEPOSIT');
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
  if(this.balance<amount){
  console.log ('Not enough balance')
  return;}
  this.balance-=amount;
  this.createTransaction(amount, 'WITHDRAW');},

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Current balanse ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for(const transaction of this.transactions){
      if(transaction.id === id){
        return transaction;
      }
    }
    return "Wrong transaction ID.";
    },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total=0
    for(const transaction of this.transactions){
      if(transaction.type===type){
        total+=transaction.amount}
        }
        return `Balance ${total}`;
  },
  
};

account.deposit(300);
account.deposit(800);
account.deposit(300);
account.withdraw(10000);
account.withdraw(100);
account.withdraw(300);
account.withdraw(260);
console.log(account.transactions);
console.log(account.getTransactionDetails(2));
console.log(account.getBalance());
console.log(account.getTransactionTotal('WITHDRAW'));