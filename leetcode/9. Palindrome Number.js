// 9. Palindrome Number
// Easy

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?



// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false


// Constraints:

// -231 <= x <= 231 - 1
// Accepted
// 1,116,175
// Submissions
// 2,260,884


/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//   const str = `${x}`;
//   let start = 0, end = str.length - 1;
//   while (start < end) {
//     if (str[start] !== str[end]) return false;
//     start++;
//     end--;
//   }
//   return true;
// };

var isPalindrome = function (x) {
  if (x < 0) return false
  let rev = 0
  for (let i = x; i >= 1; i = Math.floor(i / 10)) {
    rev = rev * 10 + i % 10
  }
  return rev === x
};


console.log(isPalindrome(12343215));