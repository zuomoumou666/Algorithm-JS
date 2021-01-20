// 290. Word Pattern
// Easy

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.



// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false


// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lower-case English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.
// Accepted
// 241,149
// Submissions
// 630,384


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const arr = s.split(' ');
  const len = pattern.length;
  if (arr.length !== len) return false;
  const map = {};
  for (let i = 0; i < len; i++) {
    const index = pattern[i];
    const str = arr[i];
    if (map[index] === undefined) {
      map[index] = i;
    }
    if (map[`@${str}`] === undefined) {
      map[`@${str}`] = i;
    }

    if (map[index] !== map[`@${str}`]) {
      return false;
    }
  }
  return true;
};

var wordPattern = function (pattern, str) {
  const words = str.split(/\s+/);
  const map = new Map();

  if (words.length !== pattern.length) return false;
  if (new Set(words).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) &&
      map.get(pattern[i]) !== words[i]) return false;
    map.set(pattern[i], words[i]);
  }
  return true;
};

// const pattern = "abba", s = "dog cat cat dog";
// Output: true

// const pattern = "abba", s = "dog cat cat fish";
// Output: false

// const pattern = "aaaa", s = "dog cat cat dog";
// Output: false

// const pattern = "abba", s = "dog dog dog dog";
// Output: false


// const pattern = "aaa", s = "aa aa aa aa";
// false

// const pattern = "jquery", s = "jquery";
// false

// const pattern = "he", s = "unit";
//false
const pattern = "abc", s = "b c a";
//true

console.log(wordPattern(pattern, s));