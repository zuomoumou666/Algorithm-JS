// 345. Reverse Vowels of a String
// Easy

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".



// Accepted
// 257,280
// Submissions
// 572,701

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };
  let j = s.length;
  let i = 0;
  const arr = s.split('');
  while (i < j) {
    const left = s[i];
    const right = s[j];
    if (vowels[left] && vowels[right]) {
      arr[i] = s[j];
      arr[j] = s[i];
      i++;
      j--;
      continue;
    }
    if (!vowels[left]) i++;
    if (!vowels[right]) j--;
  }
  return arr.join('');
};

console.log(reverseVowels('leetcode'));
// console.log(reverseVowels('hello'));