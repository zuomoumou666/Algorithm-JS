// 504. Base 7
// Easy

// Given an integer, return its base 7 string representation.

// Example 1:
// Input: 100
// Output: "202"
// Example 2:
// Input: -7
// Output: "-10"
// Note: The input will be in range of [-1e7, 1e7].

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return '0';
  let result = '';
  const negative = num < 0;
  num = Math.abs(num);
  while (num > 0) {
    result = num % 7 + result;
    num = Math.floor(num / 7);
  }
  return negative ? '-' + result : result;
};



// console.log(convertToBase7(-7));
// console.log(convertToBase7(0));
console.log(convertToBase7(100));