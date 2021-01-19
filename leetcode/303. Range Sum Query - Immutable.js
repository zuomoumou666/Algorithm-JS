// 303. Range Sum Query - Immutable
// Easy

// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int i, int j) Return the sum of the elements of the nums array in the range [i, j] inclusive (i.e., sum(nums[i], nums[i + 1], ... , nums[j]))


// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
// numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1)) 
// numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))


// Constraints:

// 0 <= nums.length <= 104
// -105 <= nums[i] <= 105
// 0 <= i <= j < nums.length
// At most 104 calls will be made to sumRange.
// Accepted
// 235,651
// Submissions
// 500,501

/**
//  * @param {number[]} nums
//  */
// var NumArray = function (nums) {
//   this.nums = nums;
// };

// /** 
//  * @param {number} i 
//  * @param {number} j
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (i, j) {
//   let result = 0;
//   while (i <= j) {
//     result += this.nums[i++];
//   }
//   return result;
// };

var NumArray = function (nums) {
  this.sums = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    sum += num;
    this.sums.push(sum);
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  if (i === 0) return this.sums[j];
  return this.sums[j] - this.sums[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */


var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log("🚀 ~ file: 303. Range Sum Query - Immutable.js ~ line 67 ~ obj.sumRange(0, 2)",
  obj.sumRange(0, 2));
// return 1 ((-2) + 0 + 3)
console.log("🚀 ~ file: 303. Range Sum Query - Immutable.js ~ line 69 ~ obj.sumRange(2, 5)",
  obj.sumRange(2, 5));
// return -1 (3 + (-5) + 2 + (-1)) 
console.log("🚀 ~ file: 303. Range Sum Query - Immutable.js ~ line 70 ~ obj.sumRange(0, 5)",
  obj.sumRange(0, 5));
 // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))