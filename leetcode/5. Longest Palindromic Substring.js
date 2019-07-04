// // 5. Longest Palindromic Substring

// // Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// // Example 1:

// // Input: "babad"
// // Output: "bab"
// // Note: "aba" is also a valid answer.
// // Example 2:

// // Input: "cbbd"
// // Output: "bb"


// /**
//  * @param {string} s
//  * @return {string}
//  */

// // var longestPalindrome = function (s) {
// //   let start = 0;
// //   const end = s.length;
// //   let result = '';
// //   while (start < end) {
// //     let n = end - start;
// //     const len = result.length;
// //     while (n > len) {
// //       const cur = s.slice(start, start + n);
// //       if (isPalindrome(cur)) {
// //         result = result.length > cur.length ? result : cur;
// //       }
// //       n -= 1;
// //     }
// //     start += 1;
// //   }
// //   return result;
// // }


// // function isPalindrome(str) {
// //   const newStr = str.toLowerCase();
// //   let start = 0;
// //   let end = newStr.length - 1;
// //   while (start < end) {
// //     if (newStr[start] === newStr[end]) {
// //       start += 1;
// //       end -= 1;
// //     } else {
// //       return false;
// //     }
// //   }
// //   return true;
// // }

// // var longestPalindrome = function (s) {
// //   if (!s) return s;
// //   let len = s.length;
// //   let arr = [];
// //   let n = 0;
// //   let dp = [];
// //   let result = s[0] || '';
// //   while (n < len) {
// //     arr.push(s[n]);
// //     dp.push(s[n]);
// //     if (n !== len - 1) {
// //       arr.push('');
// //       dp.push('');
// //     }
// //     n++;
// //   }
// //   n = 2;
// //   while (n < len) {
// //     let m = 1;
// //     while (m < arr.length - 1) {
// //       let cur = dp[m];
// //       let curLen = cur.length;
// //       if (curLen === n - 2) {
// //         let left = m - (n - 2) / 2;
// //         let right = m + (n - 2) / 2;
// //         if (left >= 0
// //           && right < arr.length
// //           && (arr[left] && arr[right])
// //           && arr[left].toLowerCase() === arr[right].toLowerCase()) {
// //           dp[m] = `${arr[left]}${dp[m]}${arr[right]}`;
// //           result = dp[m].length > result.length ? dp[m] : result;
// //         }
// //       }
// //       m++;
// //     }
// //     n++;
// //   }
// //   return result;
// // }


// // var longestPalindrome = function(s) {
// //   var max = '';
// //   for (var i = 0; i < s.length; i++) {
// //     for (var j = 0; j < 2; j++) {
// //       var left = i;
// //       var right = i + j;
// //       while (s[left] && s[left] === s[right]) {
// //         left--;
// //         right++;
// //       }
// //       if ((right - left - 1) > max.length) {
// //         max = s.substring(left + 1, right);
// //       }
// //     }
// //   }
// //   return max;
// // };


// // const longestPalindrome = (s) => {

// //   const len = s.length;
// //   var start = 0;
// //   var maxLength = 1;
// //   var finalArray = [];

// //   // create a multi dimensional array and set a default 0 value.   
// //   var table = [];
// //   for (let i = 0; i < len; i++) {
// //     table[i] = [];
// //     for (let j = 0; j < len; j++) {
// //       table[i][j] = 0;
// //     }
// //   }

// //   // for a string of length 1, all strings are palindroms. Set to true
// //   for (let i = 0; i < len; i++) {
// //     table[i][i] = true;
// //   }

// //   // for a string of length 2, compare i, and i+1 th ch
// //   for (let i = 0; i < len; i++) {
// //     if (s.charAt(i) === s.charAt(i + 1)) {
// //       table[i][i + 1] = true;
// //       start = i;
// //       maxLength = 2
// //     }
// //   }

// //   // Check for lengths greater than 2. k is length of substring
// //   for (k = 3; k <= len; k++) {
// //     for (let i = 0; i < len - k + 1; i++) {

// //       let j = i + k - 1;
// //       if (table[i + 1][j - 1] && s.charAt(i) === s.charAt(j)) {

// //         table[i][j] = true;

// //         if (k === maxLength)
// //           finalArray.push(s.substring(i, i + maxLength))
// //         else if (k > maxLength) {
// //           maxLength = k;
// //           start = i;
// //           finalArray = [];
// //           finalArray.push(s.substring(start, start + maxLength))
// //         }

// //       }


// //     }
// //   }
// //   // return s.substring(start, start + maxLength) // if only one set required
// //   return finalArray;
// // };


var longestPalindrome = function (s) {
  let result = '';
  for (let i = 0, len = s.length; i < len; i++) {
    for (let j = 0; j < 2; j++) {
      let start = i;
      let end = i + j;
      while (s[start] && s[end] && s[start].toLowerCase() === s[end].toLowerCase()) {
        start--;
        end++;
      }
      if (end - start - 1 > result.length) {
        result = s.slice(start + 1, end);
      }
    }
  }
  return result;
}

console.log(longestPalindrome("aa"));
