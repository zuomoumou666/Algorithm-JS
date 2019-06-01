// 38. Count and Say

// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.



// Example 1:

// Input: 1
// Output: "1"
// Example 2:

// Input: 4
// Output: "1211"

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n < 1 || n > 30) return false;
  let say = '1';
  for (let i = 2; i <= n; i++) {
    let cur = '';
    let next;
    let times = 1;
    for (let j = 0, len = say.length; j < len; j++) {
      next = say[j + 1];
      if (next === say[j]) {
        times++;
      } else {
        cur = `${cur}${times ? times : ''}${say[j]}`;
        times = 1;
      }
    }
    say = cur;
  }
  return say;
};

console.log(countAndSay(4));