/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    s = s.toLowerCase();

    let filterString = "";
    let rev = "";

    for (let i = 0; i < s.length; i++) {


        if (s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt() ||
            s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt()
        ) {

            filterString = filterString + s[i];
            rev = s[i] + rev;


        }
    }

    console.log(filterString, rev)

    return filterString === rev;

};
