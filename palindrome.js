

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
