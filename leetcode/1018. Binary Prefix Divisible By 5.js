// 1018. Binary Prefix Divisible By 5
// Easy

// Given an array A of 0s and 1s, consider N_i: the 0-th subarray from A[0] to A[i] interpreted as a binary number (from most-significant-bit to least-significant-bit.)

// Return a list of booleans answer, where answer[i] is true if and only if N_i is divisible by 5.

// Example 1:

// Input: [0,1,1]
// Output: [true,false,false]
// Explanation: 
// The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10.  Only the first number is divisible by 5, so answer[0] is true.
// Example 2:

// Input: [1,1,1]
// Output: [false,false,false]
// Example 3:

// Input: [0,1,1,1,1,1]
// Output: [true,false,false,false,true,false]
// Example 4:

// Input: [1,1,1,0,1]
// Output: [false,false,false,false,false]


// Note:

// 1 <= A.length <= 30000
// A[i] is 0 or 1


/**
 * @param {number[]} A
 * @return {boolean[]}
 */
// var prefixesDivBy5 = function (A) {
//   const result = [];
//   A.forEach((a, i) => {
//     result.push(result[i - 1] === undefined ? a + '' : (result[i - 1] + a));
//   });
//   return result.map(divBy5);
// };

// function divBy5(str) {
//   const len = str.length;
//   let i = len - 1;
//   let num = str[i--] === '1' ? 1 : 0;
//   const maps = [2, 4, 8, 6];
//   let j = 0;
//   while (i >= 0) {
//     num += str[i] === '1' ? maps[j] : 0;
//     i--;
//     j++;
//     if (j > 3) j = 0;
//   }
//   return num % 5 === 0;
// }
// var prefixesDivBy5 = function (A) {
//   const result = [];
//   let pre;
//   A.forEach((a, i) => {
//     if (i === 0 || pre === 0) {
//       pre = a === 0 ? 0 : 1;
//     } else {
//       pre = pre * 2 % 10 + (a === 1 ? 1 : 0);
//     }
//     result.push(pre % 5 === 0);
//   });
//   return result;
// };
var prefixesDivBy5 = function (A) {
  let res = [];
  A.reduce((acc, cur) => {
    acc = (acc * 2 + cur) % 5
    res.push(acc === 0);
    return acc;
  }, 0);
  return res;
};

// 0
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096

// 1 = 1
// 11 = 3
// 111 = 7

// const A = [0, 1, 1];
// Output: [true,false,false]
// const A= [1,1,1];
// Output: [false,false,false]
const A = [0, 1, 1, 1, 1, 1];
// Output: [true,false,false,false,true,false]
// const A= [1,1,1,0,1];
// Output: [false,false,false,false,false]
// const A = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1];
//  false, false, false, false, false, false]
//  true, true, true, false, false, false]

console.log(prefixesDivBy5(A));

