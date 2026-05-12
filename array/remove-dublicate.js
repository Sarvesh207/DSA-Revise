let nums = [0, 0, 1, 1, 2];

function removeDublicate(arr) {
  let temp = [];

  temp.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp[temp.length - 1]) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < temp.length; i++) {
    arr.push(temp[i]);
  }

  return temp.length;
}

// Optimal Approch

function removeDublicateOptimal(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(arr);
  return i + 1;
}
console.log(removeDublicateOptimal(nums));
