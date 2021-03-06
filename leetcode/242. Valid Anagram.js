// 242. Valid Anagram
// Easy

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   const sort = (str) => str.split('').sort().join("");
//   return sort(s) === sort(t);
// };
var isAnagram = function (s, t) {
  const lenS = s.length;
  const lenT = t.length;
  if (lenS !== lenT) return false;
  const map = {};
  for (let i = 0; i < lenS; i += 1) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  for (let i = 0; i < lenT; i += 1) {
    if (!map[t[i]]) return false;
    map[t[i]]--;
  }
  return true;
};