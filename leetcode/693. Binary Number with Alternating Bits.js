// 693. Binary Number with Alternating Bits
// Easy

// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.



// Example 1:

// Input: n = 5
// Output: true
// Explanation: The binary representation of 5 is: 101
// Example 2:

// Input: n = 7
// Output: false
// Explanation: The binary representation of 7 is: 111.
// Example 3:

// Input: n = 11
// Output: false
// Explanation: The binary representation of 11 is: 1011.
// Example 4:

// Input: n = 10
// Output: true
// Explanation: The binary representation of 10 is: 1010.
// Example 5:

// Input: n = 3
// Output: false


// Constraints:

// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
// var hasAlternatingBits = function (n) {
//   const str = n.toString(2);
//   let flag = true;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != flag) return false;
//     flag = !flag;
//   }
//   return true;
// };
// var hasAlternatingBits = function (n) {
//   while (n > 0) {
//     const lastBit = n % 2;
//     n = n >> 1;
//     if (n % 2 === lastBit) return false;
//   }
//   return true;
// };
var hasAlternatingBits = function (n) {
  return !/11|00/g.test(n);
};




console.log(hasAlternatingBits(5))