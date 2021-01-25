// 383. Ransom Note
// Easy

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.



// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:

// You may assume that both strings contain only lowercase letters.
// Accepted
// 248,141
// Submissions
// 466,002

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function (ransomNote, magazine) {
//   let map = {};
//   for (let i = 0; i < magazine.length; i++) {
//     const s = magazine[i];
//     map[s] = map[s] ? map[s] + 1 : 1;
//   }
//   for (let i = 0; i < ransomNote.length; i++) {
//     const s = ransomNote[i];
//     map[s] = map[s] ? map[s] - 1 : -1;
//     if (map[s] < 0) return false;
//   }
//   return true;
// };
var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (let i of magazine) {
    map[i] = map[i] ? map[i] + 1 : 1;
  }
  for (let i of ransomNote) {
    if (!map[i]) return false;
    map[i]--;
  }
  return true;
};

// Example 1:

// const ransomNote = "a", magazine = "b";
// Output: false
// Example 2:

// const ransomNote = "aa", magazine = "ab";
// Output: false
// Example 3:

const ransomNote = "aa", magazine = "aab";
// Output: true


console.log(canConstruct(ransomNote, magazine));