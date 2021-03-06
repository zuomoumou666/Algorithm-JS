// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   if (!strs.length) return '';
//   let arr = strs[0].split("");
//   for (let i = 1, len = strs.length; i < len; i++) {
//     const str = strs[i];
//     if (arr.length) {
//       for (let j = 0, jLen = arr.length; j < jLen; j++) {
//         if (str[j] !== arr[j]) {
//           arr = arr.slice(0, j);
//           break;
//         }
//       }
//     } else {
//       break;
//     }
//   }
//   return arr.join("");
// };
var longestCommonPrefix = function (strs) {
  if (strs === undefined || strs.length === 0) { return ''; }
  return strs.reduce((pre, cur) => {
    let i = 0;
    while (pre && cur && i < pre.length && pre[i] === cur[i]) {
      i++;
    }
    return pre.slice(0, i)
  })
};

const ipt = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(ipt));