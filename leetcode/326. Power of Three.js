// 326. Power of Three
// Easy

// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false
// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfThree = function (n) {
//   while (n > 1) {
//     n = n / 3;
//   }
//   return n === 1;
// };
var isPowerOfThree = function (n) {
  return /^10*$/.test(n.toString(3));
};

console.log(isPowerOfThree(45))