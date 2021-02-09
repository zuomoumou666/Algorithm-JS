// 453. Minimum Moves to Equal Array Elements
// Easy

// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

// Example:

// Input:
// [1,2,3]

// Output:
// 3

// Explanation:
// Only three moves are needed (remember each move increments two elements):

// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
// [1,2,4] > [2,3,4] > [3,4,4] > [4,5,4] > [5,5,5]
// [1,1,4] > [2,2,4] > [3,3,4] > [4,4,4]
// [1,3,5] > [2,4,5] > [3,5,5] > 
/**
 * @param {number[]} nums
 * @return {number}
 */


// max;
// (n-1)(max-1),max;
var minMoves = function (nums) {
  if (!nums || nums.length === 1) return 0;
  let sum = 0;
  let min = Infinity;
  nums.forEach(n => {
    min = Math.min(min, n);
    sum += n;
  });
  return sum - min * nums.length;
};

const nums = [1, 2, 3];
// const nums = [-100, 0, 100];
// const nums = [1, 1, 2];

console.log(minMoves(nums));