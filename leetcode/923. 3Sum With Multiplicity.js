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
  const map = new Array(101).fill(0), mod = 1000000007, third = target / 3;
  arr.forEach(i => map[i]++);
  let count = 0;
  for (let k = Math.min(target, 100); k >= third; k--) {
    const rem = target - k, half = rem / 2;
    for (let j = Math.min(rem, k); j >= half; j--) {
      let i = rem - j, x = map[i], y = map[j], z = map[k], res;
      if (i === k) {
        res = x * (x - 1) * (x - 2) / 6
      } else if (i === j) {
        res = x * (x - 1) / 2 * z;
      } else if (j === k) {
        res = x * y * (y - 1) / 2;
      } else {
        res = x * y * z;
      }
      count = (count + res) % mod;
    }
  }
  return count;
};


const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], target = 8;
// const arr = [1, 1, 2, 2, 2, 2], target = 5;
// const arr = [1, 1, 2, 2, 3, 3], target = 6;
// const arr = [0, 0, 0, 0, 0], target = 0;
// const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5], target = 8;

console.log(threeSumMulti(arr, target));