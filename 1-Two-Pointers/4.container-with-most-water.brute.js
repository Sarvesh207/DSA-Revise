/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {
  let maxWater = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let width = j - i;
      let minHeight = Math.min(arr[i], arr[j]);

      let total = width * minHeight;

      maxWater = Math.max(maxWater, total);
    }
  }

  return maxWater;
};
