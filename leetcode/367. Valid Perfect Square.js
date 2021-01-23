// 367. Valid Perfect Square
// Easy

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.



// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false


// Constraints:

// 1 <= num <= 2^31 - 1
// Accepted
// 252,757
// Submissions
// 601,640

/**
 * @param {number} num
 * @return {boolean}
 */
// var isPerfectSquare = function (num) {
//   if (num === 1) return true;
//   let half = Math.floor(num / 2);
//   while (half > 1) {
//     if (num / half === half) return true;
//     half--;
//   }
//   return false;
// };
// var isPerfectSquare = function (num) {
//   if (num === 1) return true;
//   let i = 2;
//   while (i * i <= num) {
//     if (i * i === num) return true;
//     i++;
//   }
//   return false;
// };

// var isPerfectSquare = function(num) {
//   //taylor series
//   // 1+3+5+7 = 16 .. 
//   let i = 1;
//   while(num > 0){
//       num -= i;
//       i += 2
//   }
//   return num === 0
// };
var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let left = 2, right = num / 2;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const n = mid * mid;
    if (n === num) return true;
    if (n < num) left = mid + 1;
    if (n > num) right = mid - 1;
  }
  return false;
};

console.log(isPerfectSquare(16));