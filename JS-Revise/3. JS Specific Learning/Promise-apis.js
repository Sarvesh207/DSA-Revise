let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Success"), 1000);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 failed"), 2000);
});
let p3 = new Promise((resolve, reject) => {
  // setTimeout(() => resolve("P3 Success"), 3000);
  setTimeout(() => reject("P3 failed"), 500);
});

// Promise.all

// Promise.all([p1, p2, p3]).then((res) => {
//   console.log("Result of Promise.All", res);
// });
// Promise.allSettled([p2, p1, p3]).then((res) => {
//   console.log("Result of Promise.allSettled", res);
// });
// Promise.race([p2, p1, p3]).then((res) => {
//   console.log("Result of Promise.race", res);
// });
Promise.any([p2, p1, p3]).then((res) => {
  console.log("Result of Promise.any", res);
});
