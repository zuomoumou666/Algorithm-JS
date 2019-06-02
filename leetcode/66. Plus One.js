// 66. Plus One

// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let result = [];
  if (!digits.length) return result;
  let plus = true;

  let last = digits.pop();
  while (last !== undefined) {
    let num = last
    if (plus) {
      num = num == 9 ? 0 : num + 1
      plus = num === 0;
    }
    result = [num].concat(result);
    last = digits.pop();
    if (last === undefined && num === 0) {
      result = [1].concat(result);
    }
  }
  return result;
};

const ipt = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// const ipt = [4, 3, 2, 9];
// const ipt = [4, 3, 2, 1];
// const ipt = [9];

const result = plusOne(ipt);
console.log(result);