// 414. Third Maximum Number
// Easy

// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.



// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation: The third maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.


// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


// Follow up: Can you find an O(n) solution?


/**
 * @param {number[]} nums
 * @return {number}
 */
// var thirdMax = function (nums) {
//   nums.sort((a, b) => a - b);
//   let count = 1;
//   let len = nums.length - 2;
//   while (len >= 0) {
//     if (nums[len] < nums[len + 1]) {
//       count++;
//       if (count === 3) {
//         return nums[len];
//       }
//     }
//     len--;
//   }
//   return nums[nums.length - 1];
// };
var thirdMax = function (nums) {
  if (nums.length < 3) return Math.max(...nums);
  let u = new Set(nums)
  if (u.size < 3) return Math.max(...u);

  for (let i = 0; i < 2; i++) {
    u.delete(Math.max(...u))
  }

  return Math.max(...u);
};

// const nums = [3, 2, 1];
// Output: 1
// Explanation: The third maximum is 1.
// Example 2:

// const nums = [1, 2];
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// const nums = [2, 2, 3, 1];
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];

console.log(thirdMax(nums));