reverse = (str) => { return str.split("").reverse().join(""); }


// another solution 
const array = ['blastoff', 1, 2, 3];

for (let index = array.length - 1; index >= 0; index--) {
  const element = array[index];
  console.log(element);
}
