// 171. Excel Sheet Column Number

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const arr = s.split("");
  const len = arr.length;
  let result = 0;
  arr.forEach((s, i) => {
    result +=  (s.charCodeAt() - 64) * Math.pow(26, (len - i - 1));
  });
  return result;
};
console.log(titleToNumber("ZY"));