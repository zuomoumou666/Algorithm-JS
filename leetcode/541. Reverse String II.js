// 541. Reverse String II
// Easy

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.



// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"


// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const len = s.length;
  if (k > len) return reverse(s);
  let result = '';
  for (let i = 0; i < len / k; i += 1) {
    const nextS = s.slice(i * k, Math.min((i + 1) * k, len));
    result += i % 2 === 0 ? reverse(nextS) : nextS;
  }
  return result;
};

function reverse(s) {
  return s.split('').reverse().join('');
}

// const s = "abcdefg", k = 2;
// Output: "bacdfeg"
const s = "hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl", k = 39;
// const s = "abcd", k = 2;
// Output: "bacd"
console.log(reverseStr(s, k));