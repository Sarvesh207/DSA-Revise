function moveZerosToEnd(arr) {
  let tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      tempArr.push(arr[i]);
    }
  }
  let k = 0;
  for (let j = 0; j < tempArr.length; j++) {
    arr[j] = tempArr[j];
    k++;
  }

  for (let i = k; i < arr.length; i++) {
    arr[k] = 0;
    k++;
  }

  console.log(arr);
}

// optimal
function moveZerosToEndOptimal(arr) {
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[idx++] = arr[i];
    }
  }

  while (idx < arr.length) {
    arr[idx++] = 0;
  }

  console.log(arr)
}
let arrr = [0, 1, 0, 3, 1, 2];
console.log(moveZerosToEndOptimal(arrr));
