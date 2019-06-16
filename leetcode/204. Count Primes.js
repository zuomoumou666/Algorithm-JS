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
  const nums = [];
  const result = [];
  for (let i = 2; i < n; i++) {
    nums.push(i);
  }
  let cur = nums.splice(0, 1);
  while (cur.length) {
    cur = cur[0];
    result.push(cur);
    for (let j = 0, len = nums.length; j < len; j++) {
      if (nums[j] / cur % 1 === 0) {
        nums.splice(j, 1);
      }
    }
    cur = nums.splice(0, 1);
  }
  return result.length;
};

console.time('z');
console.log(countPrimes(4999));
console.timeEnd('z');
