
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {


    let maxWater = 0;

    let right = arr.length - 1;
    let left = 0;

    while (left < right) {

        let width = right - left;
        let minHeight = Math.min(arr[left], arr[right]);
        let area = width * minHeight;

        maxWater = Math.max(maxWater, area);

        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
