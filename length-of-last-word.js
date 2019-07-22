var lengthOfLastWord = function(s) {
   var trimmed = s.trim()
var words = trimmed.split(" ")
   
  if (words.length > 1){ last =  words[words.length -1]
return last.length}

      if (trimmed === undefined || trimmed === null || trimmed.length === 0 ){
        return 0
    }
    
     if (trimmed.length === 1){
        return 1
    }
     else{
      return words[words.length -1].length
    }
  
}
