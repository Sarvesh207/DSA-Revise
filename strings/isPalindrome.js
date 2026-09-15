/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();

    let rev = "";
    let filterString = "";

    for(let i=0; i<s.length; i++){

        if(s[i].match(/[a-z0-9]/i)){
            filterString = filterString + s[i];
            rev = s[i] + rev ;

        }
    }

    return filterString == rev;
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.toLowerCase();
    let i=0;
    let j = s.length-1;

    while(i < j){

        if(!s[i].match(/[a-z0-9]/i)){
            i++
        } else if(!s[j].match(/[a-z0-9]/i)){
            j--;
        } else if(s[i] === s[j]){
            i++;
            j--;
        }else {
            return false;
        }
    }

    return true;

};
