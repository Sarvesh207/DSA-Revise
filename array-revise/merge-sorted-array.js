// Brute Force Approchh
//* Copy the num2 into num1 and then sort it
//  */
function mergeArrayWithBruteForce(num1, num2) {
  let n = num1.length;
  let m = num2.length;

  let j = 0;

  for (let i = m; i < n; i++) {
    num1[i] = num2[j];
    j++;
  }

  num1.sort((a, b) => a - b);
}

function mergeArrayWithBetter(num1, m, num2, n) {
  let num1copy = num1.splice(0, n);
  let p1 = 0;
  let p2 = 0;
  let i = 0;
  while (p1 < m && p2 < n) {
    if (num1copy[p1] < num2[p2]) {
      num1[i++] = num1copy[p1++];
    } else {
      num1[i++] = num2[p2++];
    }
  }

  while (p1 < m) {
    num1[i++] = num1copy[p1++];
  }
  while (p2 < n) {
    num1[i++] = num2[p2++];
  }
}
function mergeArray(num1, m, num2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (num1[p1] < num2[p2]) {
      num1[p] = num2[p2];
      p2--;
    } else {
      num1[p] = num1[p1];
      p1--;
    }
    p--;
  }

  while (p2 >= 0) {
    num1[p] = num2[p2];
    p2--;
    p--;
  }
}

const num1 = [1, 2, 3, 0, 0, 0];
const num2 = [2, 5, 6];
let m = num1.length;
let n = num2.length;

mergeArray(num1, 3, num2, n);
console.log(num1);
