// 415. Add Strings
// Easy

// 1508

// 359

// Add to List

// Share
// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.
// Accepted
// 258,674
// Submissions
// 536,970

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function (num1, num2) {
//   const len1 = num1.length;
//   const len2 = num2.length;
//   const maxLen = Math.max(len1, len2);
//   let result = '';
//   let carry = false;
//   let i = 1;
//   while (maxLen - i >= 0) {
//     const count = Number(num1[len1 - i] || 0) + Number(num2[len2 - i] || 0) + (carry ? 1 : 0);
//     result = count % 10 + result;
//     carry = count > 9;
//     i++;
//   }
//   return carry ? 1 + result : result;
// };
var addStrings = function (num1, num2) {
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  let result = '';
  while (carry !== 0 || i >= 0 || j >= 0) {
    const count = Number(num1[i] || 0) + Number(num2[j] || 0) + carry;
    result = count % 10 + result;
    carry = Math.floor(count / 10);
    i--;
    j--;
  }
  return result;
};

console.log(addStrings('123', '1129'));