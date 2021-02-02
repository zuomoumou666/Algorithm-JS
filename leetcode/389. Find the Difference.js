// 389. Find the Difference
// Easy

// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.



// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
// Example 3:

// Input: s = "a", t = "aa"
// Output: "a"
// Example 4:

// Input: s = "ae", t = "aea"
// Output: "a"


// Constraints:

// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lower-case English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// var findTheDifference = function (s, t) {
//   let num = 0;
//   for (let i = 0; i < s.length; i++) {
//     num -= s[i].charCodeAt();
//   }
//   for (let i = 0; i < t.length; i++) {
//     num += t[i].charCodeAt();
//   }
//   return String.fromCharCode(num);
// };
var findTheDifference = function (s, t) {
  let sum;
  let i = 0;
  for (; i < s.length; i++) {
    sum ^= s[i].charCodeAt() ^ t[i].charCodeAt();
  }
  sum ^= t[i].charCodeAt();
  return String.fromCharCode(sum);
};


const s = "abcd", t = "abcde";
// Output: "e"
// const s = "", t = "y";
// Output: "y"
// const s = "a", t = "aa";
// Output: "a"
// const s = "ae", t = "aea";
// Output: "a"


console.log(findTheDifference(s, t));