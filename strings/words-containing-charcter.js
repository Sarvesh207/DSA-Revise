/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let ans = [];

    for(let i=0; i<words.length; i++){

        // if(words[i].includes(x)){
        //     ans.push(i);
        // }

        //without build in functions

        let word = words[i];

        for(let j=0; j<word.length; j++){

            if(word.charAt(j) == x){
                ans.push(i);
                break;
            }


        }
    }

    return ans;
    
};