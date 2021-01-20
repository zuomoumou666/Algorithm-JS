// 258. Add Digits
// Easy

// 1040

// 1234

// Add to List

// Share
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:

// Input: 38
// Output: 2 
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
//              Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

// Accepted
// 337,503
// Submissions
// 578,436

/**
 * @param {number} num
 * @return {number}
 */
// var addDigits = function (num) {
//   let str = `${num}`;
//   let tempNum = 0;
//   let i = 0;
//   while (i < str.length && str.length > 1) {
//     tempNum += Number(str[i++]);
//     if (i === str.length) {
//       str = `${tempNum}`;
//       tempNum = 0;
//       i = 0;
//     }
//   }
//   return Number(str);
// };
var addDigits = function (num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};


console.log(addDigits(38));