// 1640. Check Array Formation Through Concatenation
// Easy

// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.



// Example 1:

// Input: arr = [85], pieces = [[85]]
// Output: true
// Example 2:

// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]
// Example 3:

// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].
// Example 4:

// Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
// Output: true
// Explanation: Concatenate [91] then [4,64] then [78]
// Example 5:

// Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
// Output: false


// Constraints:

// 1 <= pieces.length <= arr.length <= 100
// sum(pieces[i].length) == arr.length
// 1 <= pieces[i].length <= arr.length
// 1 <= arr[i], pieces[i][j] <= 100
// The integers in arr are distinct.
// The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all the integers in this array are distinct).

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
// var canFormArray = function (arr, pieces) {
//   let count = 0;
//   while (pieces.length) {
//     const piece = pieces.pop();
//     const index = arr.findIndex(a => a === piece[0]);
//     if (index < 0) return false;
//     count++;
//     for (let i = 1; i < piece.length; i++) {
//       if (piece[i] !== arr[index + i]) return false;
//       count++;
//     }
//   }
//   return arr.length === count;
// };
var canFormArray = function (arr, pieces) {
  let total = '';
  arr = arr.join('');
  while (pieces.length) {
    const piece = pieces.pop().join('');
    const index = arr.indexOf(piece);
    if (index < 0) return false;
    total += piece;
  }
  return arr.length === total.length;
};


// const arr = [85], pieces = [[85]];
// Output: true
// const arr = [15, 88], pieces = [[88], [15]];
// Output: true
// const arr = [49, 18, 16], pieces = [[16, 18, 49]];
// Output: false
// const arr = [91, 4, 64, 78], pieces = [[78], [4, 64], [91]];
// Output: true
// const arr = [1, 3, 5, 7], pieces = [[2, 4, 6, 8]];
// Output: false

const arr = [10, 15, 20];
const pieces = [[10, 20], [15]];

console.log(canFormArray(arr, pieces));