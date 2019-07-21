var judgeSquareSum = function(c) {

    if(c==1)return true;
    var i=0;
    while(i*i<=c){
        var currRes=c-i*i;
        if(Math.sqrt(currRes)%1 === 0){
            return true;
        }
        i++;
    }
    return false;
};


/**
 * @param {number} c
 * @return {boolean}
 
 Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:

Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
 

Example 2:

Input: 3
Output: False
 */
