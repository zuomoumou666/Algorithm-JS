// 771. Jewels and Stones
// Easy

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// var numJewelsInStones = function (J, S) {
//   let result = 0;
//   if (!J || !S) return result;
//   const hashMap = {};
//   for (let i = 0, len = J.length; i < len; i++) {
//     hashMap[J[i]] = true;
//   }
//   for (let i = 0, len = S.length; i < len; i++) {
//     if (hashMap[S[i]]) result += 1;
//   }
//   return result;
// };
var numJewelsInStones = function (J, S) {
  const jewels = J.split('');
  return S.split('').reduce((a, c) => (jewels.includes(c) ? a + 1 : a), 0);
};
const J = "aA";
const S = "aAAbbbb";
console.log(numJewelsInStones(J, S));