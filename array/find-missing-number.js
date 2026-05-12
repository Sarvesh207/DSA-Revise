function findMissingNumber(arr) {
  let n = arr.length;
  let totalSum = (n * (n + 1)) / 2;

  let partialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partialSum += arr[i];
  }

  return totalSum - partialSum;
}
let arr = [0, 1, 3];
console.log(findMissingNumber(arr));
