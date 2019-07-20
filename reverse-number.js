var reverse = function(x) {
 let arraynums= Array.from(String(x), Number);
 arraynums.reverse().join('')
    return arraynums.toString()

};

reverse(123);
