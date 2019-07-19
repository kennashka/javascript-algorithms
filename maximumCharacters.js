function MaxCharacter(str){ 
let charMap = {};
str.split('').forEach(function(char){  
if(charMap[char]) { 
charMap[char]++;
}
else { 
charMap[char] = 1; 
}  
});
//console.log(charMap)

for(let char in charMap){
  
}
}

MaxCharacter('blahya');
