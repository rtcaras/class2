// Define the BankAccount constructor function
function BankAccount(accountNumber, accountHolder, initialBalance) {
  this.accountNumber = accountNumber;
  this.accountHolder = accountHolder;
  this.balance = initialBalance;

  // Define the deposit method
  this.deposit = function (amount) {
      if (amount > 0) {
          this.balance += amount;
          return this.balance;
      } else {
          return "Deposit amount must be positive";
      }
  };

  // Define the withdraw method
  this.withdraw = function (amount) {
      if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          return this.balance;
      } else if (amount > this.balance) {
          return "Insufficient balance";
      } else {
          return "Withdrawal amount must be positive";
      }
  };
}

// Add the getBalance method to the prototype
BankAccount.prototype.getBalance = function () {
  return this.balance;
};

// Create instances of BankAccount
let myAccount = new BankAccount("123456789", "Mary Eyetan", 50000);

console.log(myAccount.deposit(2000));  // Output: 52000
console.log(myAccount.withdraw(5000)); // Output: 47000
console.log(myAccount.withdraw(50000)); // Output: "Insufficient balance"

// Define the areAccountsEqual function to compare two accounts
function areAccountsEqual(account1, account2) {
  return (
      account1.accountNumber === account2.accountNumber &&
      account1.accountHolder === account2.accountHolder &&
      account1.balance === account2.balance
  );
}

// Create more account instances for comparison
let account1 = new BankAccount("123456", "Alice", 1000);
let account2 = new BankAccount("123456", "Alice", 1000);
let account3 = new BankAccount("654321", "Bob", 2000);

console.log(areAccountsEqual(account1, account2)); // true (same details)
console.log(areAccountsEqual(account1, account3)); // false (different details)
