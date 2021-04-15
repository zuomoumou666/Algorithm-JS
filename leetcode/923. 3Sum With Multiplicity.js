// 923. 3Sum With Multiplicity
// Medium

// Given an integer array arr, and an integer target, return the number of tuples i, j, k such that i < j < k and arr[i] + arr[j] + arr[k] == target.

// As the answer can be very large, return it modulo 109 + 7.



// Example 1:

// Input: arr = [1,1,2,2,3,3,4,4,5,5], target = 8
// Output: 20
// Explanation: 
// Enumerating by the values (arr[i], arr[j], arr[k]):
// (1, 2, 5) occurs 8 times;
// (1, 3, 4) occurs 8 times;
// (2, 2, 4) occurs 2 times;
// (2, 3, 3) occurs 2 times.
// Example 2:

// Input: arr = [1,1,2,2,2,2], target = 5
// Output: 12
// Explanation: 
// arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
// We choose one 1 from [1,1] in 2 ways,
// and two 2s from [2,2,2,2] in 6 ways.


// Constraints:

// 3 <= arr.length <= 3000
// 0 <= arr[i] <= 100
// 0 <= target <= 300

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
// var threeSumMulti = function (arr, target) {
//   const mod = 1000000007;
//   let count = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     let l = i + 1, r = arr.length - 1;
//     while (l < r) {
//       const sum = arr[i] + arr[l] + arr[r];
//       if (sum > target) {
//         r--;
//       } else if (sum < target) {
//         l++;
//       } else if (arr[l] !== arr[r]) {
//         let left = 1, right = 1;
//         while (arr[l] === arr[l + 1] && l < r) {
//           left++;
//           l++;
//         }
//         while (arr[r] === arr[r - 1] && l < r) {
//           right++;
//           r--;
//         }
//         count += left * right;
//         count %= mod;
//         l++;
//       } else {
//         count += (r - l + 1) * (r - l) / 2;
//         count %= mod;
//         break
//       }
//     }
//   }
//   return count;
// };
var threeSumMulti = function (arr, target) {
  const map = new Map();
  const mod = 1000000007;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    res = (res + (map.get(target - arr[i]) || 0)) % mod;

    for (let j = 0; j < i; j++) {
      let temp = arr[i] + arr[j];
      map.set(temp, (map.get(temp) || 0) + 1);
    }
  }

  return res;
};


const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], target = 8;
// const arr = [1, 1, 2, 2, 2, 2], target = 5;
// const arr = [1, 1, 2, 2, 3, 3], target = 6;
// const arr = [0, 0, 0, 0, 0], target = 0;
// const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], target = 8;

console.log(threeSumMulti(arr, target));