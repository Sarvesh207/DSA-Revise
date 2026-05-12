function bestTimeToButAndSell(nums) {
  let profit = 0;
  let buy = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - buy > profit) {
      profit = nums[i] - buy;
    }

    if (buy > nums[i]) {
      buy = nums[i];
    }
  }

  return profit;
}

let prices = [7, 1, 5, 3, 6, 4];

console.log(bestTimeToButAndSell(prices));
