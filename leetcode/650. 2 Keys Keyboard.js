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

var minSteps = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = i;
    for (let j = Math.floor(i / 2); j >= 1; j--) {
      if (i % j === 0) {
        dp[i] = dp[j] + (i / j);
        break;
      }
    }
  }
  return dp[n];
};

// O(log(n))
var minSteps = function (n) {
  let s = 0;
  for (let d = 2; d <= n; d++) {
    while (n % d == 0) {
      s += d;
      n /= d;
    }
  }
  return s;
};


console.log(minSteps(9));