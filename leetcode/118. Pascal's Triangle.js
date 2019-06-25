// 118. Pascal's Triangle

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];
  let n = 1;
  while (n <= numRows) {
    const subArr = new Array(n).fill(1);
    result.push(subArr.map((v, i) => {
      if (i === 0 || i === n - 1) {
        return v;
      } else {
        let preArr = result[n - 2];
        return preArr[i - 1] + preArr[i];
      }
    }));
    n++;
  }
  return result;
};


const result = generate(2);

console.log(JSON.stringify(result));