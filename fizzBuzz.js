
const fizzBuzz = () =>{
  for (let i = 0; i<=100; i++){
    let output = ""
    
    
    if(i % 3 === 0) {
      output += 'Fizz'; //produce all output with fizz
    }

    if(i % 5 === 0) {
      output += 'Buzz';
    }

    if(output === "") {
      output = i;
    }

    console.log(output);

    }
  }

fizzBuzz()

// another solution for returning items in an array
var fizzBuzz = function(n) {
    let res = [];
    for(let i = 1; i <= n; i ++){
        if(i % 15 === 0){
            res.push("FizzBuzz");
        }
        else if(i % 3 === 0){
            res.push("Fizz");
        }
        else if(i % 5 === 0){
            res.push("Buzz");
        }
        else res.push(String(i));
    }
    return res;
};


for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
