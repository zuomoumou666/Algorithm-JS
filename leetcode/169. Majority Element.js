// 169. Majority Element
// Easy

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const haspMap = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    const cur = nums[i];
    haspMap[cur] = haspMap[cur] ? haspMap[cur] + 1 : 1;
    if (haspMap[cur] > len / 2) return cur;
  }
};


console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))