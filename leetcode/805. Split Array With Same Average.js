// 805. Split Array With Same Average
// Hard

// In a given integer array A, we must move every element of A to either list B or list C. (B and C initially start empty.)

// Return true if and only if after such a move, it is possible that the average value of B is equal to the average value of C, and B and C are both non-empty.

// Example :
// Input: 
// [1,2,3,4,5,6,7,8]
// Output: true
// Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have the average of 4.5.
// Note:

// The length of A will be in the range [1, 30].
// A[i] will be in the range of [0, 10000].


/**
 * @param {number[]} A
 * @return {boolean}
 */
// var splitArraySameAverage = function (A) {
//   const arr = [[[], [], null, null]];
//   const countNextAverage = (nextNumber, len, curAverage) => curAverage === null ? nextNumber / (len + 1) : (curAverage * len + nextNumber) / (len + 1);
//   while (A.length) {
//     const cur = A.pop();
//     const lenA = A.length;
//     let size = arr.length;
//     while (size) {
//       const curArr = arr.shift()
//       const [B, C, averageB, averageC] = curArr;
//       const arrPushToB = [[...B, cur], [...C], countNextAverage(cur, B.length, averageB), averageC];
//       const arrPushToC = [[...B], [...C, cur], averageB, countNextAverage(cur, C.length, averageC)];
//       if (!lenA) {
//         if (arrPushToB[2] === arrPushToB[3] || arrPushToC[2] === arrPushToC[3]) return true;
//       }
//       arr.push(arrPushToB);
//       arr.push(arrPushToC);
//       size--;
//     }
//   }
//   // return false;
//   console.time('some');
//   const result = arr.some(([B, C, b, c]) => {
//     if (b === c) {
//       console.log(B, C, b, c);
//       return true;
//     }
//     return false;
//   });
//   console.timeEnd('some');
//   return result;
// };
// var splitArraySameAverage = function (A) {
//   console.time('a');
//   let length = A.length;
//   const avgA = getAvg(A)
//   console.timeEnd('a');
//   const arr = [];
//   for (let i = 0; i < length; i++) {
//     const element = A[i];
//     arr.push([[element], element]);
//   }
//   for (let j = 1; j < A.length; j++) {
//     const element = A[j];
//     let size = arr.length;
//     while (size) {
//       const [B, avgB] = arr.shift();
//       if (avgB === avgA) {
//         console.log(B);
//         return true;
//       }
//       size--;
//       arr.push([[...B, element], getAvg(B, avgB, element)]);
//       arr.push([B, avgB]);
//     }
//   }
//   return false;
// };

// function getAvg(arr, preAvg, nextNumber) {
//   const len = arr.length;
//   const hasNextValue = nextNumber !== null && nextNumber !== undefined;
//   if (hasNextValue) return (preAvg * len + nextNumber) / (len + 1);
//   const result = (hasNextValue ? [...arr, nextNumber] : arr).reduce((a, c) => a + c, 0) / (hasNextValue ? len + 1 : len);
//   return result
// }
// sumA/n = sumB/k => sumA*k/n = sumB => sumA*k%n===0
// 1 <= k <= n/2

var splitArraySameAverage = function (A) {
  const getSum = arr => arr.reduce((a, c) => a + c, 0);
  const sumA = getSum(A);
  const len = A.length;
  const mid = Math.floor(len / 2);
  const map = {};
  const dp = [A.map((v, i) => ({ len: 1, sum: v, lastIndex: i }))];

  let possible = false;
  for (let k = 1; k < len && !possible; ++k) {
    if ((sumA * k) % len === 0) {
      possible = true;
    }
  }
  if (!possible) return false;
  for (let i = 1; i <= mid; i++) {
    const curArr = combinationSum(A, dp[i - 2], (sumA * i) / len);
    if (curArr === true) return true;
    dp.push(curArr);
  }
  return false;
};

function combinationSum(nums, baseArr, target) {
  const arr = [];
  for (let i = 0; i < baseArr.length; i++) {
    const curNum = baseArr[i];;
    for (let j = curNum.lastIndex + 1; j < nums.length; j++) {
      const element = nums[j];
      const nextSum = curNum.sum + element;
      if (nextSum === target) return true;
      arr.push({
        sum: nextSum,
        lastIndex: j,
        len: curNum.len + 1,
      })
    }
  }
  return arr;
}


// dp[len][s] = 1;
// dp[len+1][s+A[i]]

const createA = (n) => {
  const arr = [];
  while (n >= 0) {
    arr.push(n)
    // arr.push(Math.floor(Math.random() * 10001));
    n--;
  }
  return arr;
}

const arr = [3, 1, 2];
// const arr = [5, 3, 11, 19, 2]
// const arr = [1,2,3,4,5,6,7,8]
// [5,11][3,19,2]
// const A = [8771, 9355, 7037, 8664, 389, 1967, 5502, 5353, 384, 4941, 1655, 1289, 853, 2894, 9649, 3186];
// const A = [60, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
// const A = createA(17)
// console.log("A", JSON.stringify(arr));
// 5+3+11+19+2
console.time("result");
const result = splitArraySameAverage(arr);
console.timeEnd("result");
console.log("result", result)

