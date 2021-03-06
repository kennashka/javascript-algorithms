function upper(str){

var words = str.toLowerCase().split(" ") // every is lowercase
for (var i = 0; i < words.length; i++){
  words[i] = words[i][0].toUpperCase() +
  words[i].slice(1)
  // console.log(words[i]) give each of the loop output one by one until it ends 
  // words[i] = words[i][0].toUpperCase() will give us the first letter in every words uppercased "H I A E O C S T U"
  // words[i] = words[i].slice(1) this will remove the first letter from the string. 
  //ex. "ere s n xample f onvert trings o ppercase"
}
return words.join(" ");
}

upper('Here is an example of Convert Strings to Uppercase');


// another solution

return str .toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1).join('')
                                         
return str.replace(/\b[a-z]/gi, function(char){ return char.toUpperCase(); }); 
//word boundary backslash \b rangeof a-z (g global i case sensitive)
