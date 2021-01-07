// 67. Add Binary
// Easy

// Share
// Given two binary strings a and b, return their sum as a binary string.



// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
// Accepted
// 548,671
// Submissions
// 1,178,785


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const lenA = a.length;
  const lenB = b.length;
  const longStr = lenA > lenB ? a : b;
  let carry = '0';
  let result = '';
  for (let i = 1; i <= longStr.length; i++) {
    let nums1 = 0;
    if (a[lenA - i] === '1') nums1++;
    if (b[lenB - i] === '1') nums1++;
    if (carry === '1') nums1++;
    carry = nums1 > 1 ? '1' : '0';
    result = ((nums1 === 1 || nums1 === 3) ? '1' : '0') + result;
  }
  if (carry === '1') result = carry + result;
  return result;
};

// var addBinary = function(a, b) {
//   return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
// };

// const a = "11", b = "1";
// Output: "100"
// Example 2:

const a = "1010", b = "1011";
// Output: "10101"


console.log(addBinary(a, b));