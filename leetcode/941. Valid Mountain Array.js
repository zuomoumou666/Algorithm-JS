// 941. Valid Mountain Array

// Given an array A of integers, return true if and only if it is a valid mountain array.

// Recall that A is a mountain array if and only if:

// A.length >= 3
// There exists some i with 0 < i < A.length - 1 such that:
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[B.length - 1]


// Example 1:

// Input: [2,1]
// Output: false
// Example 2:

// Input: [3,5,5]
// Output: false
// Example 3:

// Input: [0,3,2,1]
// Output: true


// Note:

// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000 


/**
* @param {number[]} A
* @return {boolean}
*/
var validMountainArray = function (A) {
  if (!A || !A.length) return false;
  const len = A.length;
  if (len > 10000 || len < 3) return false;
  let status = 'up';
  let pre = A[0];
  let flag = true;
  if (A[1] <= pre) return false;
  for (let i = 1; i < len; i++) {
    if (pre === A[i]) return false;
    if (status === 'up') {
      if (A[i] < pre) {
        status = 'down';
      }
    } else {
      if (A[i] > pre) {
        return false;
      }
    }
    pre = A[i];
  }
  return status === 'down' && flag;
};

// const input = [3, 5, 5];
// const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const input = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(validMountainArray(input));