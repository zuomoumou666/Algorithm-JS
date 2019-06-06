// 28. Implement strStr()

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   if (!needle) return 0;
//   let index = -1;
//   let len = haystack.length;
//   let len1 = needle.length;
//   for (let i = 0, l = len - len1; i < l; i++) {
//     let flag = true;
//     let j = 0;
//     let k = len1 - 1;
//     while (j < k) {
//       if ((haystack[i + j] === needle[j]) && (haystack[i + k] === needle[k])) {
//         j++;
//         k--;
//       } else {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// };
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  let len = haystack.length;
  let len1 = needle.length;
  for (let i = 0; i < len; i++) {
    let j = 0;
    let k = len1 - 1;
    while (j <= k) {
      if ((haystack[i + j] === needle[j]) && (haystack[i + k] === needle[k])) {
        j++;
        k--;
      } else {
        break;
      }
    }
    if (j > k) {
      return i;
    }
  }
  return -1;
};

const haystack = "a";
const needle = "a";
// const haystack = "mississippi";
// const needle = "a";
// const haystack = "hello";
// const needle = "ll";
// const haystack = "aaaaa";
// const needle = "bba";

console.log(strStr(haystack, needle))