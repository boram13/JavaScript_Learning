
class BankAccount {

    constructor(accountNumber, balance) {

      this.accountNumber = accountNumber;
      this.balance = balance;
    }
// krijoj nga nje funnksion per secilin veprim qe kerkoj te bej per deposir dhe withdrow

  deposit(money) {
    this.balance += money;
    console.log(`Deposit: ${money}`);
  }

  withdraw(money) {

    if (money <= this.balance) {

      this.balance -= money;
          console.log(`Withdraw: ${money}`);
    } else {
      throw new Error(`Balance is; ${this.balance}, nothing to withdraw`);
    }

    return this.balance;
  }

}
module.exports = BankAccount
 
