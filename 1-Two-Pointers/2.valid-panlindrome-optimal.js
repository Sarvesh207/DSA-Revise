/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;



    while (i < j) {
        if (!/[a-z0-9]/.test(s[i])) {

            i++
        } else if (!/[a-z0-9]/.test(s[j])) {
            j--;
        } else if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }



    return true;

};
