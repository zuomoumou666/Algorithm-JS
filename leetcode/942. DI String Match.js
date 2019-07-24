// 942. DI String Match
// Easy

// Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

// If S[i] == "I", then A[i] < A[i+1]
// If S[i] == "D", then A[i] > A[i+1]


// Example 1:

// Input: "IDID"
// Output: [0,4,1,3,2]
// Example 2:

// Input: "III"
// Output: [0,1,2,3]
// Example 3:

// Input: "DDI"
// Output: [3,2,0,1]


// Note:

// 1 <= S.length <= 10000
// S only contains characters "I" or "D".


/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  const result = [];
  const len = S.length;
  let start = 0;
  let end = len;
  for (let i = 0; i <= len; i++) {
    if (S[i] === 'D') {
      result.push(end--);
    } else {
      result.push(start++);
    }
  }
  return result;
};

console.log(diStringMatch('IDID'));