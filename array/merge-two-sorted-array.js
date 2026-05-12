function mergeTwoArrayBruteForce(arr1, m, arr2, n) {
  for (let i = m; i < arr1.length; i++) {
    arr1[i] = arr2[i - m];
  }

  return arr1.sort((a, b) => a - b);
}

function mergeTwoArrayWith(arr1, m, arr2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return arr1;
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
console.log(mergeTwoArrayWith(nums1, m, nums2, n));
