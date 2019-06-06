// 867. Transpose Matrix

// Given a matrix A, return the transpose of A.

// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.



// Example 1:

// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:

// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]


// Note:

// 1 <= A.length <= 1000
// 1 <= A[0].length <= 1000

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
// var transpose = function (A) {
//   let row = A.length;
//   if (!row) return [];
//   let col = A[0].length;
//   let result = new Array(col).fill(new Array(row).fill(0));
//   for (let i = 0; i < col; i++) {
//     result[i] = [];
//     for (let j = 0; j < row; j++) {
//       result[i][j] = A[j][i]
//     }
//   }
//   return result;
// };
var transpose = function (A) {
  let row = A.length;
  if (!row) return [];
  let col = A[0].length;
  let result = [];
  while (col--) {
    let r = row;
    if (!result[col]) {
      result[col] = [];
    }
    while (r--) {
      result[col][r] = A[r][col];
    }
  }
  return result;
};
// const ipt = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// const out = [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ];
const ipt = [
  [1, 2, 3],
  [4, 5, 6]
];
// const out = [
//   [1, 4],
//   [2, 5],
//   [3, 6]
// ];

const a = transpose(ipt)
console.log(a);