var sortArrayByParity = function (A) {
  return isEven(A).concat(isOdd(A))
};

function isEven(arr) {
  return arr.filter(e => { return e % 2 === 0 })
}

function isOdd(arr) {
  return arr.filter(e => { return e % 2 !== 0 })
}
