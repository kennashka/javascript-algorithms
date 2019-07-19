// prints the sum of numbers an array

const simpleArraySum =(ar) =>{
    return ar.reduce((total, num ) => total + num, 0);

  
}
simpleArraySum([1, 2, 3, 4])
