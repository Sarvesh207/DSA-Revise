function lengthOfLastWord_bruteForce(s) {
  s = s.trim();
  s = s.split(" ");

  return s[s.length - 1].length;
}


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordBetter = function (s) {

    let n = s.length - 1;

    while (n >= 0) {

        if (s[n] == " ") {
            --n;
        } else {
            break;
        }
    }

    let count = 0;

    while (n >= 0) {

        if (s[n] !== " ") {
            --n;
            ++count;
        } else {
            break
        }
    }

    return count;
};
