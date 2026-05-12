var removeElement = function (arr, val) {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      temp.push(arr[i]);
    }
  }

  console.log("temp", temp);

  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  return temp.length;
};
