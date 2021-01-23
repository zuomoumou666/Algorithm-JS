// 349. Intersection of Two Arrays
// Easy

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.


// Accepted
// 437,312
// Submissions
// 678,679

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//   const result = [];
//   const map = new Map();
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   if (!len1 || !len2) return [];
//   nums1.forEach(n => map.set(n, true));
//   nums2.forEach(n => {
//     if (map.get(n)) {
//       result.push(n);
//       map.delete(n);
//     }
//   });
//   return result;
// };
var intersection = function (nums1, nums2) {
  const map = new Set(nums1);
  return [...new Set(nums2.filter(n => map.has(n)))];
};


// Example 1:

// const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
// Output: [2]
// Example 2:

const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4];
// Output: [9,4]


console.log(intersection(nums1, nums2));