// 263. Ugly Number
// Easy

// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

// Example 1:

// Input: 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:

// Input: 14
// Output: false 
// Explanation: 14 is not ugly since it includes another prime factor 7.
// Note:

// 1 is typically treated as an ugly number.
// Input is within the 32-bit signed integer range: [−231,  231 − 1].

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) return false;
  let result = num;
  while ((result = num / 2) % 1 === 0) { num = result }
  while ((result = num / 3) % 1 === 0) { num = result }
  while ((result = num / 5) % 1 === 0) { num = result }
  return num === 1;
};
// var isUgly = function (num) {
//   if (num <= 0) return false;
//   const factors = [2, 3, 5];
//   const len = factors.length;
//   let result = num;
//   while (result >= factors[0]) {
//     for (let i = 0; i < len; i++) {
//       let nextResult = result / [factors[i]];
//       if (nextResult % 1 == 0) {
//         result = nextResult;
//         break;
//       } else {
//         if (i === len - 1) {
//           return false;
//         }
//       }

//     }
//   }
//   return result % 1 == 0;
// };

const result = isUgly(14);
// const result = isUgly(14);

console.log(result);