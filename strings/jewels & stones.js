/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {


    let uniqueSet = new Set();

    for (let i = 0; i < jewels.length; i++) {
        uniqueSet.add(jewels[i]);
    }



    let count = 0;
    for (let j = 0; j < stones.length; j++) {
        if (uniqueSet.has(stones[j])) {
            ++count;
        }
    }

    return count;


};



/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let count = 0;

    for(let i=0; i<stones.length; i++){

        // if(jewels.includes(stones[i])){
        //     count++
        // }

        for(let j=0; j<jewels.length; j++){

            if(jewels[j] == stones[i]){
                count++;
            }
        }
    }

    return count;

   
};