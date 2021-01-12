// 167. Two Sum II - Input array is sorted
// Easy

// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.


// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]


// Constraints:

// 2 <= nums.length <= 3 * 104
// -1000 <= nums[i] <= 1000
// nums is sorted in increasing order.
// -1000 <= target <= 1000
// Accepted
// 505,384
// Submissions
// 912,777


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//   const len = numbers.length;
//   if (!len || numbers[0] > target) return [];
//   let left = 0;
//   let right = len - 1;
//   let mid
//   while (left < right) {
//     mid = Math.floor((left + right) / 2);
//     const num = numbers[mid];
//     if (num === target || (numbers[mid - 1] <= target && numbers[mid + 1] >= target)) {
//       break;
//     }
//     if (num < target) {
//       left = mid + 1;
//     } else if (num > target) {
//       right = mid - 1;
//     }
//   }
//   for (let i = 0; i < len - 1 && numbers[i] <= target; i++) {
//     const elementA = numbers[i];
//     for (let j = i + 1; j <= mid + 1; j++) {
//       const elementB = numbers[j];
//       if (elementA + elementB === target) return [i + 1, j + 1];
//     }
//   }
//   return [];
// };
var twoSum = function (numbers, target) {
  const len = numbers.length;
  if (!len || numbers[0] > target) return [];
  for (let i = 0, j = len - 1; i < j;) {
    const a = numbers[i];
    const b = numbers[j];
    if (a + b === target) return [i + 1, j + 1];
    if (a + b < target) {
      i++;
    } else {
      j--;
    }
  }
};

// const numbers = [2, 7, 11, 15], target = 9;
// Output: [1,2]

// const numbers = [2, 3, 4], target = 6;
// Output: [1,3]

const numbers = [-1, 0], target = -1;
// Output: [1,2]

console.log(twoSum(numbers, target));

