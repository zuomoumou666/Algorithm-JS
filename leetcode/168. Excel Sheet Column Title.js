// 168. Excel Sheet Column Title
// Easy

// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 
//     ...
// Example 1:

// Input: 1
// Output: "A"
// Example 2:

// Input: 28
// Output: "AB"
// Example 3:

// Input: 701
// Output: "ZY"
// Accepted
// 240,436
// Submissions
// 761,079


/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let result = '';
  while (n) {
    if (n <= 26) {
      result = String.fromCharCode(64 + n) + result;
      return result;
    }
    let num = n % 26;
    if (num === 0) {
      num = 26;
    }
    n = n - num;
    result = String.fromCharCode(64 + num) + result;
    n = n / 26;
  }
  return result;
};
// 27 = 1*26^1 + 1*26^0;
//       A + A
// 701 = 26*26^1 + 25*26^0
//       Z    + Y
// 702 = 26*26^1 + 26*26^0

console.log(convertToTitle(701));