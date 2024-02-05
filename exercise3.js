function BankAccount(amount = 0) {
  this.amount = amount;
  this.withdraw = (value) => {
    this.amount -= value;
  };
  this.deposit = (value) => {
    this.amount += value;
  };
  this.balance = () => {
    return this.amount;
  };
}

module.exports = {
  BankAccount,
};
