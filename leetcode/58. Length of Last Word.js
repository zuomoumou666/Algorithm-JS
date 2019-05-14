// 58. Length of Last Word

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5


/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
//   if (!s) return 0;
//   const str = s.trim();
//   if (!str) return 0;
//   const arr = str.split(' ');
//   return arr[arr.length - 1].length;
// };
var lengthOfLastWord = function (s) {
  if (!s) return 0;
  const str = s.trim();
  if (!str) return 0;
  return str.split(' ').pop().length;
};

const Input = "Hello  World ";
console.log(lengthOfLastWord(Input))