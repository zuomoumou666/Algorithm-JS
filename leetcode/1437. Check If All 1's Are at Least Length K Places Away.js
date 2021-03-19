// 1437. Check If All 1's Are at Least Length K Places Away
// Easy

// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.



// Example 1:



// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.
// Example 2:



// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.
// Example 3:

// Input: nums = [1,1,1,1,1], k = 0
// Output: true
// Example 4:

// Input: nums = [0,1,0,1], k = 1
// Output: true


// Constraints:

// 1 <= nums.length <= 105
// 0 <= k <= nums.length
// nums[i] is 0 or 1


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var kLengthApart = function (nums, k) {
//   let preIndex = nums.findIndex(n => n === 1);
//   for (let i = preIndex + 1; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       if (i - preIndex - 1 < k) {
//         return false;
//       } else {
//         preIndex = i;
//       }
//     }
//   }
//   return true;
// };
var kLengthApart = function (nums, k) {
  let count = k;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
      continue;
    }
    if (count < k) return false;
    count = 0;
  }
  return true;
};




// const nums = [1, 0, 0, 0, 1, 0, 0, 1], k = 2;
// Output: true
// const nums = [1, 0, 0, 1, 0, 1], k = 2;
// Output: false
// const nums = [1, 1, 1, 1, 1], k = 0;
// Output: true
const nums = [0, 1, 0, 1], k = 1;
// Output: true

console.log(kLengthApart(nums, k));