// 88. Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let cur = null;
  let result = [];
  while (cur !== undefined && i + j < m + n) {
    let n1 = i < m ? nums1[i] : Infinity;
    let n2 = j < n ? nums2[j] : Infinity;
    cur = Math.min(n1, n2);
    result.push(cur);
    if (n1 <= n2) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;


const result = merge(nums1, m, nums2, n);

console.log(result);