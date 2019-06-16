// 204. Count Primes

// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 1) return 0;
  const nums = new Array(n).fill(0);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (nums[i]) {
      continue;
    }
    count++;
    for (let j = i; j < n; j += i) {
      nums[j] = true;
    }
  }
  return count;
};

console.time('z');
console.log(countPrimes(499949));
console.timeEnd('z');
