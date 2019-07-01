// 283. Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   for (let i = 0, len = nums.length; i < len; i++) {
//     if (nums[i] === 0) {
//       nums.push(nums.splice(i, 1)[0]);
//       len--;
//       i--;
//     }
//   }
//   return nums;
// };
var moveZeroes = function (nums) {
  let n = nums.length;
  while (n--) {
    if (nums[n] === 0) {
      nums.splice(n, 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]))
