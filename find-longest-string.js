function longest(str){
var words = str.split(" ");
var longword = "";

for (var word of words){
  if (word.length > longword.length){
     longword = word;
  }
}
    return longword.length;
}
longest('hi my name is kennashka');
