// 228. Summary Ranges
// Easy

// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b


// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
// Example 3:

// Input: nums = []
// Output: []
// Example 4:

// Input: nums = [-1]
// Output: ["-1"]
// Example 5:

// Input: nums = [0]
// Output: ["0"]


// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.
// Accepted
// 200,794
// Submissions
// 477,138

/**
 * @param {number[]} nums
 * @return {string[]}
 */
// var summaryRanges = function (nums) {
//   let len = nums.length;
//   if (len === 1) return [`${nums[0]}`];
//   const result = [];
//   let start = nums[0];
//   for (let i = 1; i < len; i++) {
//     const cur = nums[i];
//     const pre = nums[i - 1];
//     if (cur - pre !== 1 && i < len - 1) {
//       result.push(start === pre ? `${pre}` : `${start}->${pre}`);
//       start = cur;
//     }
//     if (i === len - 1) {
//       if (cur - pre === 1) {
//         result.push(`${start}->${cur}`);
//       } else {
//         result.push(start === pre ? `${start}` : `${start}->${pre}`);
//         result.push(`${cur}`);
//       }
//     }
//   }
//   return result;
// };
// var summaryRanges = function (nums) {
//   let j = 0;
//   const result = [];
//   nums.push('#');
//   let len = nums.length;
//   for (let i = 1; i < len; i++) {
//     if (nums[i] - nums[j] !== i - j) {
//       result.push(i - j > 1 ? `${nums[j]}->${nums[i - 1]}` : `${nums[j]}`);
//       j = i;
//     }
//   }
//   return result;
// };
var summaryRanges = function (nums) {
  let start = nums[0];
  const result = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      result.push(nums[i] === start ? `${start}` : `${start}->${nums[i]}`);
      start = nums[i + 1];
    }
  }
  return result;
};

const nums = [0, 1, 2, 4, 5, 7];
// Output: ["0->2","4->5","7"]
// const nums = [0, 2, 3, 4, 6, 8, 9];
// Output: ["0","2->4","6","8->9"]
// const nums = [];
// []
// const nums = [-1];
// Output: ["-1"]
// const nums = [0, 1, 2];
// ['0->2']
// const nums = [1, 3];

console.log(summaryRanges(nums));