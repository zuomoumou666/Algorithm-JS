// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   const len = nums.length;
//   if (len <= 1) return null;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   const len = nums.length;
//   if (len <= 1) return null;
//   const map = {};
//   let result = null;
//   for (let i = 0; i < len; i++) {
//     map[nums[i]] = (map[nums[i]] || []).concat(i);
//     if (map[target - nums[i]] !== undefined) {
//       if (nums[i] * 2 === target) {
//         if (map[nums[i]].length === 2) {
//           result = map[nums[i]];
//           break;
//         } else {
//           continue;
//         }
//       }
//       result = [map[nums[i]][0], map[target - nums[i]][0]];
//       break;
//     }
//   }
//   return result && result.sort((a, b) => (a - b));
// };

var twoSum = function (nums, target) {
  const len = nums.length;
  if (len <= 1) return null;
  const hash = {};
  let j, i;
  for (i = 0; i < len; i++) {
    j = target - nums[i];
    if (hash[j] !== undefined) return [i, hash[j]].sort((a, b) => (a - b));
    hash[nums[i]] = i;
  }
};

// var twoSum = function (nums, target) {
//   var i, j, len = nums.length;
//   var hash = {};
//   for (i = 0; i < len; i++) {
//     j = target - nums[i];
//     if (hash[j] !== undefined)
//       return [i, hash[j]];
//     else
//       hash[nums[i]] = i;
//   }
// };

// const nums = [3, 2, 4];
// const target = 6;
const nums = [0, 4, 3, 0];
const target = 0;
// const nums = [-1, -2, -3, -4, -5];
// const target = -8;
// const nums = [2, 7, 11, 15];
// const target = 9;
console.log(twoSum(nums, target))