// 357. Count Numbers with Unique Digits
// Medium

// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

// Example:

// Input: 2
// Output: 91 
// Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, 
//              excluding 11,22,33,44,55,66,77,88,99


// Constraints:

// 0 <= n <= 8
/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n < 0) return 0;
  const dp = [1, 10];
  for (let i = 2; i <= n; i++) {
    let sum = 9;
    for (let d = 1; d < i; d++) {
      sum *= 10 - d;
    }
    dp.push(sum + dp[i - 1]);
  }
  return dp[n];
};
// var countNumbersWithUniqueDigits = function (n) {
//   let max = Math.pow(10, n);
//   let uniqueCount = 0;
//   // const arr = [];
//   for (let i = 0; i < max; i++) {
//     if (!isUnique(i)) {
//       uniqueCount++;
//       // arr.push(i);
//     }
//   }
//   // console.log(JSON.stringify(arr));

//   return max - uniqueCount;
// };

// function isUnique(num) {
//   if (num < 10) return true;
//   const map = {};
//   const str = `${num}`;
//   const len = str.length;
//   let index = 0;
//   while (index < len) {
//     if (map[str[index]]) return false;
//     map[str[index]] = true;
//     index++;
//   }
//   return true;
// }

const result = countNumbersWithUniqueDigits(3);

console.log(result);

