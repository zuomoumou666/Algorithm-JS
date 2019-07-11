// 387. First Unique Character in a String
// Easy

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.


/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function (s) {
//   if (!s) return -1;
//   const map = {};
//   const arr = [];
//   for (let i = 0, len = s.length; i < len; i++) {
//     let cur = s[i];
//     if (map[cur] === undefined) map[cur] = i;
//     arr[map[cur]] = arr[map[cur]] + 1 || 1;
//   }
//   for (let j = 0, len = arr.length; j < len; j++) {
//     if (arr[j] === 1) return j;
//   }
//   return -1;
// };
var firstUniqChar = function (s) {
  if (!s) return -1;
  const map = {};
  for (let i = 0, len = s.length; i < len; i++) {
    let cur = s[i];
    map[cur] = map[cur] === undefined ? i : null;
  }
  for (let j in map) {
    if (map[j] !== null) return map[j];
  }
  return -1;
};

console.log(firstUniqChar('loveleetcode'));