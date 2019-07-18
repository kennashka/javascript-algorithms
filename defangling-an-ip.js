var defangIPaddr = function(address) {
   var removedot = address.split('.') //["1","1","1","1"] we remove the dots
    return removedot.join('[.]'); 
};

defangIPaddr("1.1.1.1");
