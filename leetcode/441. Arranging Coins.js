// 441. Arranging Coins
// Easy

// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.

/**
 * @param {number} n
 * @return {number}
 */
// var arrangeCoins = function (n) {
//   let count = 0;
//   for (let i = 1; i <= n && n > 0; i++) {
//     n -= i;
//     if (n >= 0) {
//       count++;
//     }
//   }
//   return count;
// };


// var arrangeCoins = function (n) {
//   let left = 1, right = n;
//   let k, curr;
//   while (left <= right) {
//     k = left + ((right - left) >> 1);
//     curr = k * (k + 1) / 2;
//     if (curr <= n && ((k + 1) * (k + 2) > 2 * n)) return k;
//     if (curr <= n) {
//       left = k + 1;
//     } else {
//       right = k - 1;
//     }
//   }
//   return 0;
// };

var arrangeCoins = function (n) {
  let left = 0, right = n;
  let k, curr;
  while (left <= right) {
    k = left + ((right - left) >> 1);
    curr = k * (k + 1) / 2;
    if (curr === n) return k;
    if (curr < n) {
      left = k + 1;
    } else {
      right = k - 1;
    }
  }
  return right;
};

console.log(arrangeCoins(5));