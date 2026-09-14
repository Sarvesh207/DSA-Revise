/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split("");

  for (let x = 0; x < s.length; x += 2 * k) {
    let n = k;
    let mid = Math.floor(n / 2);

    for (let i = 0; i < mid; i++) {
      let temp = s[i + x];
      s[i + x] = s[n - 1 - i + x];
      s[n - 1 - i + x] = temp;
    }
  }

  return s.join("");
};
