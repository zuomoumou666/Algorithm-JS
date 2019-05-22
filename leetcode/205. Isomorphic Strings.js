// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isIsomorphic = function (s, t) {
//   const lenS = s.length;
//   const lenT = t.length;
//   if (lenS !== lenT) return false;
//   const hashS = {};
//   const hashT = {};
//   for (let i = 0; i < lenS; i++) {
//     const curS = s[i];
//     const curT = t[i];
//     hashS[curS] = hashS[curS] === undefined ? i : hashS[curS];
//     hashT[curT] = hashT[curT] === undefined ? i : hashT[curT];
//     if (hashS[curS] !== hashT[curT]) return false;
//   }
//   return true;
// };

var isIsomorphic = function (s, t) {
  const lenS = s.length;
  const lenT = t.length;
  if (lenS !== lenT) return false;
  const hashS = {};
  const hashT = {};
  for (let i = 0; i < lenS; i++) {
    const curS = s[i];
    const curT = t[i];
    if (!hashS[curS] && !hashT[curT]) {
      hashS[curS] = curT;
      hashT[curT] = curS;
    } else if (hashS[curS] !== curT) {
      return false;
    }
  }
  return true;
};

// const s = "aa", t = "ab";
const s = "ab", t = "aa";
// const s = "abacd", t = "aaaaa";
// const s = "egg", t = "add";
console.log(isIsomorphic(s, t));
