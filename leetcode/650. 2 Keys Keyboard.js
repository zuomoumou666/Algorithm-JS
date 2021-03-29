// 650. 2 Keys Keyboard
// Medium

// Initially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step:

// Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
// Paste: You can paste the characters which are copied last time.


// Given a number n. You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get n 'A'.

// Example 1:

// Input: 3
// Output: 3
// Explanation:
// Intitally, we have one character 'A'.
// In step 1, we use Copy All operation.
// In step 2, we use Paste operation to get 'AA'.
// In step 3, we use Paste operation to get 'AAA'.


// 6
// =======
// 1
// 2
// 4
// 6
// --------
// 1
// 2
// 3
// 6


// Note:

// The n will be in the range [1, 1000].

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  const map = { 1: true };
  const arr = [{ count: 1, copy: 0, step: 0 }];
  while (arr.length) {
    const { count, copy, step } = arr.shift();
    if (count > n) continue;
    if (count === n) return step;
    if (copy === 0) {
      arr.push({ count, copy: count, step: step + 1 });
    } else {
      if (copy !== count) {
        if (!map[count]) arr.push({ count: count, copy: count, step: step + 1 });
        map[count] = true;
      }
      arr.push({ count: count + copy, copy, step: step + 1 });
    }
  }
};

// 1,0
// 2,2
// 3,3
// 4,4
// 5,5
// 6,5
// 1,0
// 2,2
// 3,3
// 4,4
// 6,5
// 7,7
// 8,6



// 12,7
// 14,9
// 16,8
// dp[4] = dp[2] + 2 = 4;
// dp[5] = dp[3] + dp[2] = 5;
// d[6] = d[5] + 2;
// dp[9] = dp[4] + dp[5] = 9???
// d[n] = Min(d[n-1] + 2, d[n/2]*n/2);
// d[9] = d[8] + 2;
// d[8] = d[6] + 2;
// d[6] = d[5] + 2;
// d[6] = d[5] + 2;
// var minSteps = function (n) {

// };



console.log(minSteps(99));