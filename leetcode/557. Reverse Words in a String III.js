// 557. Reverse Words in a String III

// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.


/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {
//   return s.split(' ').reduce((a, c) => {
//     let reverse = c.split("").reverse().join("");
//     return a ? `${a} ${reverse}` : reverse;
//   }, "");
// };
// var reverseWords = function (s) {
//   return s.split(' ').reduce((a, c) => {
//     let reverse = c.split("").reverse().join("");
//     return a ? `${a} ${reverse}` : reverse;
//   }, "");
// };
var reverseWords = function (s) {
  return s.split("").reverse().join("").split(' ').reverse().join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));