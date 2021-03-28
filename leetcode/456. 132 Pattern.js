// 456. 132 Pattern
// Medium

// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

// Return true if there is a 132 pattern in nums, otherwise, return false.

// Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?



// Example 1:

// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.
// Example 2:

// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
// Example 3:

// Input: nums = [-1,3,2,0]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].


// Constraints:

// n == nums.length
// 1 <= n <= 104
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var find132pattern = function (nums) {
//   let arr = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) arr.push(nums[i]);
//   }
//   for (let i = 0; i < arr.length - 2; i++) {
//     let min = arr[i], max = -Infinity;
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[j] > min) {
//         max = arr[j];
//       }
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[k] < max && arr[k] > min) {
//           console.log(i, j, k);
//           console.log(min, max, arr[k]);
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// };
var find132pattern = function (nums) {
  if (nums.length < 3) return false;
  const first = [nums[0]];
  const last = [];
  for (let i = 1; i < nums.length; i++) {
    first.push(Math.min(first[first.length - 1], nums[i]));
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    const mid = nums[i];
    if (mid > first[i]) {
      while (last.length && last[last.length - 1] <= first[i]) last.pop();
      if (last.length && mid > last[last.length - 1]) return true;
      last.push(mid);
    }
  }
  return false;
};

// const nums = [1, 2, 3, 4];
// Output: false
// const nums = [3, 1, 4, 2];
// Output: true
const nums = [-1, 3, 2, 0];
// Output: true
// const nums = [-2, 1, 2, -2, 1, 2];



console.log(find132pattern(nums));