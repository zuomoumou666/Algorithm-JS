// 500. Keyboard Row
// Easy

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".



// Example 1:

// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]
// Example 2:

// Input: words = ["omk"]
// Output: []
// Example 3:

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]


// Constraints:

// 1 <= words.length <= 20
// 1 <= words[i].length <= 100
// words[i] consists of English letters (both lowercase and uppercase). 

/**
 * @param {string[]} words
 * @return {string[]}
 */
// var findWords = function (words) {
//   const rows = [
//     'qwertyuiop',
//     'asdfghjkl',
//     'zxcvbnm',
//   ];
//   return words.filter(word => {
//     const len = word.length;
//     const index = rows.findIndex(row => row.indexOf(word[0].toLowerCase()) >= 0);
//     let i = 1;
//     while (i < len) {
//       if (rows[index].indexOf(word[i].toLowerCase()) < 0) {
//         return false;
//       }
//       i++;
//     }
//     return true;
//   });
// };
var findWords = function (words) {
  return words.filter(w => {
    return /^[qwertyuiop]*$/i.test(w) || /^[asdfghjkl]*$/i.test(w) || /^[zxcvbnm]*$/i.test(w);
  });
};
// const words = ["Hello", "Alaska", "Dad", "Peace"];
// Output: ["Alaska","Dad"]
// const words = ["omk"];
// Output: []
const words = ["adsdf", "sfd"];
// Output: ["adsdf","sfd"]


console.log(findWords(words));