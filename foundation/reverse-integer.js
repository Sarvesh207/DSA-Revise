function reverseInteger(num) {
  let isNegative = false;
  if (num < 0) {
    isNegative = true;
  }
  let abValue = Math.abs(num);
  let rev = 0;

  while (abValue !== 0) {
    let lastDigit = abValue % 10;

    rev = rev * 10 + lastDigit;

    abValue = Math.floor(abValue / 10);
  }

  return isNegative ? -rev : rev;
}

console.log(reverseInteger(-121))
