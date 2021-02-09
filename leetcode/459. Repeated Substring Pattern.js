// 459. Repeated Substring Pattern
// Easy

// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.



// Example 1:

// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
// Example 2:

// Input: "aba"
// Output: False
// Example 3:

// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

/**
 * @param {string} s
 * @return {boolean}
 */
// var repeatedSubstringPattern = function (s) {
//   return s.repeat(2).slice(1, -1).includes(s);
// };
var repeatedSubstringPattern = function (s) {
  for (let i = 0; i < s.length - 1; i++) {
    const check = Array.from(new Set(s.split(s.slice(0, i + 1))))
    if (check.length === 1) return true
  }
  return false
};
// var repeatedSubstringPattern = function (s) {
//   const len = s.length;
//   if (len <= 1) return false;
//   let n = Math.ceil(len / 2);
//   while (n > 0) {
//     if ((len / n) % 1 === 0) {
//       if (s.substr(0, n).repeat(len / n) === s) return true;
//     }
//     n--;
//   }
//   return false;
// };

const s = "abab";
// const s = "aba";
// const s = "abcabcabcabc";
// const s = "a";

console.log(repeatedSubstringPattern(s))