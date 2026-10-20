/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    let hashSet = new Set();

    for (let j = i + 1; j < nums.length; j++) {
      let third = -(nums[i] + nums[j]);

      if (hashSet.has(third)) {
        let temp = [nums[i], nums[j], third].sort((a, b) => a - b);

        seen.set(temp.join(","), temp);
      }

      hashSet.add(nums[j]);
    }
  }

  return [...seen.values()];
};
