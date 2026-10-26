/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (arr1, m, arr2, n) {
  let i = 0;
  let j = 0;
  let ans = [];

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i++]);
    } else {
      ans.push(arr2[j++]);
    }
  }

  while (i < m) ans.push(arr1[i++]);
  while (j < n) ans.push(arr2[j++]);

  // final result
  for (let i = 0; i < ans.length; i++) {
    arr1[i] = ans[i];
  }

  return arr1;
};
