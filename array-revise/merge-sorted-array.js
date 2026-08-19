// Brute Force Approchh
//* Copy the num2 into num1 and then sort it
//  */
function mergeArray(num1, num2) {
  let n = num1.length;
  let m = num2.length;

  let j = 0;

  for (let i = m; i < n; i++) {
    num1[i] = num2[j];
    j++;
  }

  num1.sort((a, b) => a - b);
}

const num1 = [1, 2, 3, 0, 0, 0];
const num2 = [2, 5, 6];

mergeArray(num1, num2);
console.log(num1);
