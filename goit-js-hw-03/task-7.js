const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

let tid = 0;
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  createTransaction(amount, type) {
    const addTransaction = { amount: amount, type: type, id: (tid += 1) };
    return addTransaction;
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  withdraw(amount) {
    if (this.balance < amount) {
      console.log('Not enough balance');
      return;
    }
    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, 'WITHDRAW'));
  },

  getBalance() {
    return `Current balanse ${this.balance}`;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'Wrong transaction ID.';
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
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
