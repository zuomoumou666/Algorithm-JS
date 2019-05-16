// 69. Sqrt(x)

// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since 
//              the decimal part is truncated, 2 is returned.


/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//   return parseInt(Math.sqrt(x));
// };


// var mySqrt = function (x) {
//   if (x === 1) return 1;
//   let pre = 0;
//   for (let i = 1; i <= x; i++) {
//     if (i * i > x) {
//       return i - 1;
//     } else if (i * i === x) {
//       return i;
//     }
//     pre = i * i;
//   }
//   return 0;
// };

// var mySqrt = function (x) {
//   const min = 0;
//   const max = x;
//   return findNum(min, max, x);
// };
// function findNum(min, max, x) {
//   const mid = min + (max - min) / 2;
//   const square = mid * mid;
//   if (parseInt(square) === x) return parseInt(mid);
//   if (mid * mid > x) return findNum(min, mid, x);
//   return findNum(mid, max, x);
// }

var mySqrt = function (x) {
  let min = 1;
  let max = Math.floor(x / 2) + 1;
  let mid;
  while (min <= max) {
    mid = Math.floor((max + min) / 2);
    const square = mid * mid;
    if (square > x) {
      max = mid - 1;
    } else if (square < x) {
      min = mid + 1;
    } else {
      return mid;
    }
  }
  return max;
};

const num = 8;
console.log(mySqrt(num));