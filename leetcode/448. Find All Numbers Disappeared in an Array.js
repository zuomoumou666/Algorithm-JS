// 448. Find All Numbers Disappeared in an Array
// Easy

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]
// Accepted
// 329,655
// Submissions
// 587,403


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
      let num = Math.abs(nums[i]);
      let idx = num-1;
      nums[idx] = Math.abs(nums[idx]) * -1;
  }
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) res.push(i+1);
  }
  return res;
};
// var findDisappearedNumbers = function (nums) {
//   const result = [];
//   const map = {};
//   let n = 1;
//   const len = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     map[num] = true;
//   }
//   while (n <= len) {
//     if (!map[n]) result.push(n);
//     n++;
//   }
//   return result;
// };


// Input:
const nums = [4, 3, 2, 7, 8, 2, 3, 1];

// Output:
// [5,6]
[2,2]
// const nums = [1, 1];
console.log(findDisappearedNumbers(nums));