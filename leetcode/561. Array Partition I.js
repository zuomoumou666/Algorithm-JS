// 561. Array Partition I
// Easy

// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

// Example 1:
// Input: [1,4,3,2]

// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
// Note:
// n is a positive integer, which is in the range of [1, 10000].
// All the integers in the array will be in the range of [-10000, 10000].


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => (a - b));
  let result = 0;
  for (let i = 0, len = nums.length / 2; i < len; i++) {
    result = result + nums[2 * i];
  }
  return result;
};

const ipt = [6214, -2290, 2833, -7908];
// const ipt = [1, 2, 3, 4];

console.log(arrayPairSum(ipt));