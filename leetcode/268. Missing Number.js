// 268. Missing Number
// Easy

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?


/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   nums.sort((a, b) => (a - b));
//   for (let i = 0, len = nums.length; i <= len; i++) {
//     if (nums[i] !== i) return i;
//   }
// };
// var missingNumber = function (nums) {
//   const hashMap = {};
//   let len = nums.length;
//   for (let i = 0; i < len; i++) {
//     hashMap[nums[i]] = true;
//   }

//   for (let i = 0; i <= len; i++) {
//     if (!hashMap[i]) return i;
//   }
// };
var missingNumber = function (nums) {
  const len = nums.length;
  let sum = len * (len + 1) / 2;
  return sum - nums.reduce((a, c) => (a + c), 0);
};

console.log(missingNumber([0]));