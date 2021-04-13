// 16. 3Sum Closest
// Medium

// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers. You may assume that each input would have exactly one solution.



// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// [-4,-1,1,2,3] 0


// Constraints:

// 3 <= nums.length <= 10^3
// -10^3 <= nums[i] <= 10^3
// -10^4 <= target <= 10^4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => (a - b));
  let diff = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i];
      if (sum === target) return sum;
      if (Math.abs(sum - target) < Math.abs(diff)) {
        diff = sum - target;
      }
      if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return target + diff;
};


// const nums = [-1, 2, 1, -4], target = 1;
const nums = [0, 2, 1, -3];
const target = 1;
// [-3,0,1,2]

console.log(threeSumClosest(nums, target));