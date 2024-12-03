
function BankAccount(accountNumber, accountHolder, initialBalance) {
    
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder; 
    this.balance = initialBalance;
  
   
    this.deposit = function (amount) {
        if (amount > 0) {
          this.balance += amount;
          return this.balance; 
        } else {
          return "Deposit amount must be positive";
        }
      };
  
  
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
  

  let myAccount = new BankAccount("123456789", "Mary Eyetan", 50000);
  

  console.log(myAccount.deposit(2000));  
  console.log(myAccount.withdraw(-5000));
  console.log(myAccount.withdraw(50000)); 
  