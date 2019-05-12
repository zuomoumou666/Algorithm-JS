// 728. Self Dividing Numbers

// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: 
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// Note:

// The boundaries of each input argument are 1 <= left <= right <= 10000.

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  if (left < 1 || right > 10000) return null;
  const result = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      result.push(i);
    }
  }
  return result;
};

function isSelfDividing(num) {
  let arr = (num + '').split('');
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === '0') return false;
    if (num % (arr[i] - 0) !== 0) return false;
  }
  return true;
}


const left = 1, right = 22;

console.log(selfDividingNumbers(left, right));