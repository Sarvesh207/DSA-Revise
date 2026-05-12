let target = 9;
let nums = [-1, 0, 3, 5, 9, 12];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      return arr[mid];
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch(nums, target));
