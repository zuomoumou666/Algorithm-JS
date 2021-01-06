// 35. Search Insert Position
// Easy


// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104
// Accepted
// 742,463
// Submissions
// 1,737,021

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const len = nums.length;
  let left = 0, right = len - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    const midNum = nums[mid];
    if (midNum === target) {
      return mid;
    }
    if (midNum < target) {
      left = mid + 1;
    }
    if (midNum > target) {
      right = mid - 1;
    }
  }
  return left;
};


// const nums = [1, 3, 5, 6], target = 5;
// Output: 2
// const nums = [1, 3, 5, 6], target = 2;
// Output: 1
// const nums = [1, 3, 5, 6], target = 7;
// Output: 4
// const nums = [1,3,5,6], target = 0;
// Output: 0
// const nums = [1], target = 2;
//1
// const nums = [1], target = 0;
// Output: 0


// const nums = [1, 2, 4, 6, 7], target = 3;
// 2
// const nums = [1, 3], target = 3;
// 1
// const nums = [1, 3, 5], target = 2;
//1
// const nums = [1, 3, 5], target = 4;
// const nums = [1, 2, 4, 6, 8, 9, 10], target = 10;
const nums = [2, 3, 5, 6, 9], target = 7;

console.log(searchInsert(nums, target));