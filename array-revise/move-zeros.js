/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesBruteaForce = function (nums) {
  let newArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      newArray.push(nums[i]);
    }
  }

  // put back in original array
  for (let i = 0; i < newArray.length; i++) {
    nums[i] = newArray[i];
  }

  for (let i = newArray.length; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// Optimal Solution
var moveZeroes = function (nums) {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx++] = nums[i];
    }
  }

  while (idx !== nums.length) {
    nums[idx++] = 0;
  }
};
