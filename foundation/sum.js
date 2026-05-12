function sum(...args) {
  let total = 0;
  for (el of args) {
    total = total += el;
  }

  return total;
}

console.log(sum(10, 20, 30, 60));
