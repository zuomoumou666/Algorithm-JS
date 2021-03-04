// 15. 3Sum
// Medium

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []


// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function (nums) {
//   const len = nums.length;
//   const result = [];
//   const hash = {};
//   if (!len) return result;
//   for (let i = 0; i < len - 1; i++) {
//     const map = {};
//     for (let j = i + 1; j < len; j++) {
//       const sum = nums[j] + nums[i];
//       if (map[-sum] !== undefined) {
//         const triplet = [-sum, nums[i], nums[j]].sort((a, b) => (a - b));
//         const key = triplet.join('');
//         if (hash[key]) continue;
//         result.push(triplet);
//         hash[key] = true;
//       } else {
//         map[nums[j]] = j;
//       }
//     }
//   }
//   return result;
// };
var threeSum = function (nums) {
  const len = nums.length;
  const result = [];
  if (len < 3) return result;
  nums.sort((a, b) => (a - b));
  for (let i = 0; i < len - 2; i++) {
    let l = i + 1, r = len - 1;
    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i];
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};



// const nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]
// const nums = [];
// Output: []
// const nums = [0];
// Output: []

const nums = [3, 0, -2, -1, 1, 2];
console.log(threeSum(nums));