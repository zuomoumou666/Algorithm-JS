// Given an integer array nums,
// find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   const len = nums.length;
//   let max = nums[0];
//   let sum;
//   for (let i = 0; i < len; i++) {
//     sum = nums[i];
//     max = Math.max(sum, max);
//     for (let j = i + 1; j < len; j++) {
//       sum = sum + nums[j];
//       max = Math.max(sum, max);
//     }
//   }
//   return max;
// };

var maxSubArray = function(nums) {
  let len = nums.length;
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for(let i = 0; i < len; ++i) {
      if(sum + nums[i] > nums[i]) {
          sum += nums[i];
      } else {
          sum = nums[i];
      }
      if(sum > max) {
          max = sum;
      }
  }
  return max;
};



const arr = [-2, 1];
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(arr));