function palindromeNumber(num) {
  let copyNum = num;
  let reverseNum = 0;
  while (num !== 0) {
    lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  console.log(reverseNum);

  return reverseNum === copyNum;
}

console.log(palindromeNumber(121));

121;
10;

10;
