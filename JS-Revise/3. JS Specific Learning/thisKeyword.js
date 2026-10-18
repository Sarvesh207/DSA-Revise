// "use strict"
// console.log(this);
// function X() {
//   console.log(this);
// }
// X();
// window.X();

// Call Bind & Apply

// function deliver(...args) {
//   console.log("Delivering to " + this.address, ...args);
// }

// const rahul = { address: "Kothrud", deliver };
// const priya = { address: "Baner",   deliver };

// rahul.deliver(); // Delivering to Kothrud
// priya.deliver(); // Delivering to Baner

// // Till now everyting is fine
// // the problem becomes when we give suppose we call deliver without "."

// let fn = deliver.bind(rahul, "HELLO");
// deliver.call(rahul, "HELLO from call");
// deliver.apply(rahul, ["HELLO from call","Pune"]);

// fn();

// This inside the arrow function


let obj = {
  a: 10,
  x: () => {
    console.log("this", this);
  },
};

obj.x();
let obj2 = {
  a: 10,
  x: function () {
    console.log("this", this);
  },
};

obj2.x();
