

function palindrome(str){
  var reg = /[\W_]/g;

var small = str.toLowerCase().replace(reg,'');

var pal = small.split('').reverse().join('');

if (pal === small){
  return true
}
else{
  return false
}
return pal;
}
palindrome('racecar')

/*
ANOTHER SOLUTION

var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]+/gi,"").toLowerCase();  // "regex = /\W/g"  even simpler!
    return s === s.split("").reverse().join("")
};

*/
  
  
