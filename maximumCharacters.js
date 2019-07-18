function MaxCharacter(str){ 
const charMap = { };
str.split('').forEach(function(char){  
if(charMap[char]) { 
charMap[char]++;
}
else { 
charMap[char]=1; 
}  
});
}

MaxCharacter('blahya');
