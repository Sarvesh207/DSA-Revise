let arr = [1, 2, 3];

function smallestNumber(arr) {
  let smallest = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return {
    smallest: smallest,
    largest: max,
  };
}

console.log(smallestNumber(arr));
