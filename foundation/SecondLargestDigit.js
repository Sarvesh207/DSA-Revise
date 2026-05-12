var secondHighest = function (s) {
  const digitSet = new Set();
  for (let i = 0; i < s.length; i++) {
    let isDigit = /^[0-9]$/.test(s.charAt(i));
    if (isDigit) {
      digitSet.add(Number(s.charAt(i)));
    }
  }
  if (digitSet.size === 1 || digitSet.size === 0) return -1;
  let firstMax = 0;
  let secondMax = 0;
  for (el of digitSet) {
    if (firstMax < el) {
      secondMax = firstMax;
      firstMax = el;
    } else if (el > secondMax && el !== firstMax) {
      secondMax = el;
    }
  }

  return secondHighest;
};

console.log(secondHighest("abc1111"));
