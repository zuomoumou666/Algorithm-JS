// 859. Buddy Strings
// Easy

// Given two strings a and b, return true if you can swap two letters in a so the result is equal to b, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at a[i] and b[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".



// Example 1:

// Input: a = "ab", b = "ba"
// Output: true
// Explanation: You can swap a[0] = 'a' and a[1] = 'b' to get "ba", which is equal to b.
// Example 2:

// Input: a = "ab", b = "ab"
// Output: false
// Explanation: The only letters you can swap are a[0] = 'a' and a[1] = 'b', which results in "ba" != b.
// Example 3:

// Input: a = "aa", b = "aa"
// Output: true
// Explanation: You can swap a[0] = 'a' and a[1] = 'a' to get "aa", which is equal to b.
// Example 4:

// Input: a = "aaaaaaabc", b = "aaaaaaacb"
// Output: true


// Constraints:

// 1 <= a.length, b.length <= 2 * 104
// a and b consist of lowercase letters.

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function (a, b) {
  if (a.length !== b.length) return false;
  const arr = [];
  const map = new Set();
  for (let i = 0; i < a.length; i++) {
    map.add(a[i]);
    if (a[i] === b[i]) continue;
    arr.push(i);
    if (arr.length > 2) return false;
  }
  if (a === b) {
    return map.size < a.length;
  }
  const [i, j] = arr;
  return arr.length === 2 && b[i] === a[j] && b[j] === a[i];
};


// const a = "ab", b = "ba";
// Output: true
// const a = "ab", b = "ab";
// Output: false
// const a = "aa", b = "aa";
// Output: true
// const a = "aaaaaaabc", b = "aaaaaaacb";
// Output: true


const a = "aa", b = "aa";

console.log(buddyStrings(a, b));