// 451. Sort Characters By Frequency

// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  if (!s) return s;
  const memory = {};
  const arr = [];
  let string = "";
  for (let i = 0; i < s.length; i++) {
    const curS = s[i]
    memory[curS] = memory[curS] ? memory[curS] + 1 : 1;
  }
  for (let k in memory) {
    let str = "";
    let num = memory[k];
    while (num) {
      str += k;
      num--
    }
    arr[memory[k]] = (arr[memory[k]] || '') + str;
  }
  for (let j = arr.length - 1; j > 0; j--) {
    if (arr[j]) {
      string = string + arr[j];
    }
  }
  return string;
};


var frequencySort = function (s) {
  if (!s) return s;
  const memory = {};
  const arr = s.split('');
  for (let i = 0; i < s.length; i++) {
    const curS = s[i]
    memory[curS] = memory[curS] ? memory[curS] + 1 : 1;
  }
  arr.sort((a, b) => {
    const result = memory[b] - memory[a];
    if (result === 0) return b.charCodeAt(0) - a.charCodeAt(0);
    // if (result === 0) return a.charCodeAt(0) - b.charCodeAt(0);
    return memory[b] - memory[a];
  })
  return arr.join('');
};

const input = "loveleetcode";
// const input = 'tree';
// const input = 'cccaaa';
// const input = 'Aabb';
console.log(frequencySort(input));