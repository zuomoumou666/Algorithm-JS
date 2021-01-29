// 392. Is Subsequence
// Easy

// Given two strings s and t, check if s is a subsequence of t.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false


// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


// Follow up: If there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const lenS = s.length;
  const lenT = t.length;
  let i = 0;
  let j = 0;
  while (i < lenS && j < lenT) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === lenS;
};

// Example 1:

// const s = "abc", t = "ahbgdc";
// Output: true
// Example 2:

// const s = "axc", t = "ahbgdc";
// Output: false
const s = "", t = "ahbgdc";
console.log(isSubsequence(s, t));