// 219. Contains Duplicate II
// Easy


// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
// Accepted
// 310,270
// Submissions
// 806,473

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const len = nums.length;
  if (len < 2) return false;
  const map = {};
  for (let i = 0; i < len; i++) {
    const num = nums[i];
    if (map[num] === undefined) {
      map[num] = i;
    } else {
      if (Math.abs(map[num] - i) <= k) {
        return true;
      }
      map[num] = i;
    }
  }
  return false;
};
// var containsNearbyDuplicate = function (nums, k) {
//   const len = nums.length;
//   if (len < 2) return false;
//   let distance = Infinity;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] === nums[j]) {
//         distance = Math.min(distance, j - i);
//         if (distance <= k) return true;
//       }
//     }
//   }
//   return distance <= k;
// };



const nums = [1, 2, 3, 1], k = 3;
// Output: true
// const nums = [1,0,1,1], k = 1;
// Output: true
// const nums = [1, 2, 3, 1, 2, 3], k = 2;
// Output: false
console.log(containsNearbyDuplicate(nums, k));