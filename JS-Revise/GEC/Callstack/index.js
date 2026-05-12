// console.log(a);
// var a = 10;

// undefiend

// a();

// function a() {
//   console.log("Hello");
// }

// Hello

// 3 )

// a();

// var a = function () {
//   console.log("Hello");
// };

//  TypeError: a is not a function


var x = 10;

function a() {
  console.log(x);
}

function b() {
  var x = 20;
  return function () {
    console.log(x);
  };
}

var result1 = a;
var result2 = b();

result1();
result2();

// 10  20
