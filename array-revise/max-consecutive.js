/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {

    let maxCount = 0;
    let freq = 0

    for (let i = 0; i <= nums.length; i++) {

        if (nums[i] === 1) {
            freq++;
        } else {
            maxCount = Math.max(maxCount, freq);
            freq = 0;
        }
    }

    return maxCount;
};
