// closure
// Closure is fucntion that preserve access to variable from outer scrope even after the out function finished its execution
//

console.log("closure");

function outer() {
    let x = 5;
    return function inner() {
        console.log(x);
    }
}

let myClosure = outer();
console.dir(myClosure); // This will log the inner function definition
myClosure(); // This will log 5


// Application of closure

// 1 . Data hioding using closure

console.log("Data hioding using closure");

function bankAccount() {

    let balance = 0; // private variable

    return {
        getbalance() {
            return balance;
        },

        deposit(amount) {
            balance += Number(amount);
        }
    }
}

const account = bankAccount();
account.deposit(100);
console.log(account.getbalance());
console.log(account.balance); // undefined, cannot access private variable directly


// 2. mainting state using closure

console.log("mainting state using closure");

function counter() {
    let count = 0; // private variable  

    return function increment() {
        count++;
        return count;
    }
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());





