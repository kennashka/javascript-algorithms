// compares and counts repeating values in an array

var numJewelsInStones = function(J, S) {
    
 const num = new Set(J)
 
 return S.split('').reduce((res, s) => res + num.has(s), 0)
    
    
};
