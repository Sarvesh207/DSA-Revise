function findSingleNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }

  return xor;
}

let arr = [2, 2, 1, 3, 3];

console.log(findSingleNumber(arr));
