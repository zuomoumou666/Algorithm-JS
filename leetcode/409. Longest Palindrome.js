// 409. Longest Palindrome
// Easy

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



//   Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2


// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and / or uppercase English letters only.

/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function (s) {
//   const map = {};
//   let flag = true;
//   for (let str of s) {
//     map[str] = map[str] ? map[str] + 1 : 1;
//   }
//   return Object.values(map).reduce((p, c) => {
//     if (c % 2 === 0) {
//       return p + c;
//     } else {
//       if (flag) {
//         flag = false;
//         return p + c;
//       }
//       return p + c - 1;
//     }
//   }, 0);
// };
var longestPalindrome = function (s) {
  const map = {};
  let n = 0;
  for (let str of s) {
    map[str] = map[str] ? map[str] + 1 : 1;
    if (map[str] === 2) {
      map[str] = 0;
      n += 2;
    }
  }
  if (s.length > n) n += 1;
  return n;
};

console.log(longestPalindrome('abccccdd'))