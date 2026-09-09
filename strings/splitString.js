/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {

    let count = 0;
    let rCount = 0
    let lCount = 0;

    for(let i=0; i<s.length; i++){



        if(s[i] == "R"){
            rCount++;
        }

        if(s[i] == "L"){
            lCount++;
        }


        if(rCount == lCount){
            count++;
            rCount = 0;
            lCount = 0;
        }
    }



    return count;
};



/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplitOptimize = function(s) {

    let count = 0;
    let temp = 0;

    for(let i=0; i<s.length; i++){



        if(s[i] == "R"){
            temp++;
        }

        if(s[i] == "L"){
           temp--;
        }


        if(temp == 0){
            count++;
        }
    }



    return count;
};
