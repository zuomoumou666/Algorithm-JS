// 5. Longest Palindromic Substring

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */

// var longestPalindrome = function (s) {
//   let start = 0;
//   const end = s.length;
//   let result = '';
//   while (start < end) {
//     let n = end - start;
//     const len = result.length;
//     while (n > len) {
//       const cur = s.slice(start, start + n);
//       if (isPalindrome(cur)) {
//         result = result.length > cur.length ? result : cur;
//       }
//       n -= 1;
//     }
//     start += 1;
//   }
//   return result;
// }


// function isPalindrome(str) {
//   const newStr = str.toLowerCase();
//   let start = 0;
//   let end = newStr.length - 1;
//   while (start < end) {
//     if (newStr[start] === newStr[end]) {
//       start += 1;
//       end -= 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

var longestPalindrome = function (s) {
  let len = s.length;
  let arr = [];
  let n = 0;
  let dp = [];
  let result = '';
  while (n < len) {
    arr.push(s[n]);
    dp.push(s[n]);
    if (n !== len - 1) {
      arr.push('');
      dp.push('');
    }
    n++;
  }
  n = 0;
  while (n < len) {
    let m = 1;
    while (m < arr.length - 1) {
      let left = m - n;
      let right = m + n;
      if (left >= 0 && right < arr.length && arr[left].toLowerCase() === arr[right].toLowerCase()) {
        dp[m] = `${arr[left]}${dp[m]}${arr[right]}`;
        result = dp[m].length > result.length ? dp[m] : result;
      }
      m++;
    }
    n++;
  }
  return result;
}

console.log(longestPalindrome("abcda"));

// dp[i] = dp[i-1] + after
// pre ===after;
// [a, 0, 0, 0, 0, abccba, 0];
// [];