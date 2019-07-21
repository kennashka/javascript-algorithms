const reverse = function(x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let result = 0;
  
  while (x) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    result = result * 10 + digit;
  }
  
  // restrict result to maintain settled overflow
  if (result > 2**31) {
    return 0;
  }
  
  return isNegative ? -result : result;
};


/*

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.



*/
