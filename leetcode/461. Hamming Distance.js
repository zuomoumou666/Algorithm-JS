// 461. Hamming Distance
// Easy

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and X, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let binaryX = x.toString(2).split('');
  let binaryY = y.toString(2).split('');
  let maxLen = Math.max(binaryX.length, binaryY.length);
  let result = 0;
  const prefixArr = (arr, len) => (new Array(len - arr.length).fill('0').concat(arr));
  binaryX = prefixArr(binaryX, maxLen);
  binaryY = prefixArr(binaryY, maxLen);
  for (let i = 0; i < maxLen; i++) {
    if (binaryX[i] !== binaryY[i]) {
      result++;
    }
  }
  return result;
};


console.log(hammingDistance(1, 4));