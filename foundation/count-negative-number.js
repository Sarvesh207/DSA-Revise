function countNegativeNumber(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }

  return count;
}

const arr = [-1, -2, -4, 5];

console.log(countNegativeNumber(arr));
