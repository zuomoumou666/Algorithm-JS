// 566. Reshape the Matrix
// Easy

// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:
// Input: 
// nums = 
// [[1,2],
//  [3,4]]
// r = 1, c = 4
// Output: 
// [[1,2,3,4]]
// Explanation:
// The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
// Example 2:
// Input: 
// nums = 
// [[1,2],
//  [3,4]]
// r = 2, c = 4
// Output: 
// [[1,2],
//  [3,4]]
// Explanation:
// There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
// Note:
// The height and width of the given matrix is in range [1, 100].
// The given r and c are all positive.

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const lenR = nums.length;
  const lenC = nums[0].length;
  if (r * c !== lenR * lenC) return nums;
  const result = [];
  for (let i = 0; i < lenR; i++) {
    for (let j = 0; j < lenC; j++) {
      if ((i * lenC + j) % c === 0) {
        result.push([nums[i][j]]);
      } else {
        result[result.length - 1].push(nums[i][j]);
      }
    }
  }
  return result;
};

// const nums =
//   [[1, 2],
//   [3, 4]];
// const r = 1, c = 4;
// Output: 
// [[1,2,3,4]]
// const nums = 
// [[1,2],
//  [3,4]];
// const r = 2, c = 4;
// Output: 
// [[1,2],

const nums = [[1, 2, 5], [3, 4, 6]];
const r = 3;
const c = 2;
console.log(matrixReshape(nums, r, c));