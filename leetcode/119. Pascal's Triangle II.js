// 119. Pascal's Triangle II
// Easy

// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

// Notice that the row index starts from 0.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Follow up:

// Could you optimize your algorithm to use only O(k) extra space?



// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function (rowIndex) {
//   if (rowIndex === 0) return [1];
//   const arr = [1, 1];
//   if (rowIndex === 1) return arr;
//   for (let i = 2; i <= rowIndex; i++) {
//     let record = arr[0];
//     for (let j = 1; j < arr.length; j++) {
//       const num = record + arr[j];
//       record = arr[j];
//       const insert = j === arr.length - 1 ? 0 : 1;
//       arr.splice(j, insert, num);
//       if (insert === 0) j++;
//     }
//   }
//   return arr;
// };
var getRow = function (rowIndex) {
  const row = [1];
  if (rowIndex === 0) return row;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (i === j) {
        row[j] = 1;
      } else {
        row[j] = row[j - 1] + row[j];
      }
    }
  }
  return row;
};


console.log(getRow(3));