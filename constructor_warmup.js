// Write a constructor to model a bank account. Bank accounts belong to an accountHolder, has an accountType and a balance. The accountHolder should be a String holding the customers name, the accountType should be a String as well, the balance should be a Number. None of these fields should be modifiable by an outside entity, instead each should be accessed via setters and getters.
//
// Additionally, make a method called purchase which allows a user to make a purchase and subtract it from their balance. Once you have this working, add additional logic so that a balance cannot go negative and instead the code emits a message like "you can't do that" using console.log.
//
// Here is some sample usage:
//
// var newAccount = new BankAccount("Andreas K", "savings", "1.25"); // new account with $1.25 balance
// newAccount.balance = 5000;
// console.log(newAccount.getBalance()); // 1.25
//
// newAccount.setBalance(100);
// console.log(newAccount.getBalance()); // 100
// 
// // same with name and accountType
//
// newAccount.purchase(10);
// console.log(newAccount.getBalance()); // 90
// function BankAccount(accountHolder, accountType, balance) {
//   this.accountHolder = accountHolder;
//   this.balance = balance;
//   this.accountType = accountType;
//   var that = this;
//   return {
//     getBalance: function() {
//       return that.balance;
//     },
//
//     setBalance: function(number) {
//       that.balance = number;
//     },
//
//     purchase: function(price) {
//       if (that.balance - price < 0) {
//         console.log("You can't do that");
//       } else {
//         this.setBalance(that.balance - price);
//       }
//     }
//   };
// }
function BankAccount(accountHolder, accountType, balance) {
  this.accountHolder = accountHolder;
  this.balance = balance;
  this.accountType = accountType;
  var that = this;
  return {
    setAccountHolder: function(newAccountHolder) {
      that.accountHolder = newAccountHolder;
    },

    getAccountHolder: function() {
      return that.accountHolder;
    },

    purchase: function(amount) {
      if(amount > that.balance) {
        console.log("You don't got enough money");
      } else {
        that.balance -= amount;
      }
    }
  };
}

var newAccount = new BankAccount("Andreas K", "savings", "1.25"); // new account with $1.25 balance
newAccount.balance = 5000;
console.log(newAccount.getBalance()); // 1.25

newAccount.setBalance(100);
console.log(newAccount.getBalance()); // 100

// same with name and accountType

newAccount.purchase(10);
console.log(newAccount.getBalance()); // 90
