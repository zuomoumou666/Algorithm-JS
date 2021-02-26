// 844. Backspace String Compare
// Easy

// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function (S, T) {
//   let i = S.length - 1, j = T.length - 1;
//   while (i >= 0 || j >= 0) {
//     i = nextIndex(S, i);
//     j = nextIndex(T, j);
//     if (S[i] !== T[j]) {
//       return false;
//     }
//     i--;
//     j--;
//   }
//   return i < 0 && j < 0;
// };

// function nextIndex(s, i) {
//   let n = 0;
//   while (s[i] === '#' || n > 0) {
//     if (s[i] === '#') {
//       n++;
//       i--;
//     } else {
//       n--;
//       i--;
//     }
//   }
//   return i;
// }

var backspaceCompare = function (S, T) {
  return process(S) === process(T);
};

function process(str) {
  const stack = [];
  for (let s of str) {
    if (s === '#') {
      stack.length > 0 && stack.pop();
    } else {
      stack.push(s);
    }
  }
  return stack.join('');
}



const S = "ab#c", T = "ad#c";
// Output: true
// const S = "ab##", T = "c#d#";
// Output: true
// const S = "a##c", T = "#a#c";
// Output: true
// const S = "a#c", T = "b";
// Output: false

// const S = "xywrrmp", T = "xywrrmu#p";
// const S = "ab##", T = "c#d#";
// const S = "y#fo##f", T = "y#f#o##f";

// const S = "nzp#o#g", T = "b#nzp#o#g";

console.log(backspaceCompare(S, T));