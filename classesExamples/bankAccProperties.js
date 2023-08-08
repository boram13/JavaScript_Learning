const BankAccount = require('../models/BankAcc')

const account = new BankAccount('Bora', 0)

console.log(account)
account.withdraw(100);
console.log(account)
account.deposit(600)
console.log(account)
console.log()
