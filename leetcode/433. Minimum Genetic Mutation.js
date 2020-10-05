// 433. Minimum Genetic Mutation
// Medium

// A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T".

// Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.

// For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.

// Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.

// Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

// Note:

// Starting point is assumed to be valid, so it might not be included in the bank.
// If multiple mutations are needed, all mutations during in the sequence must be valid.
// You may assume start and end string is not the same.


// Example 1:

// start: "AACCGGTT"
// end:   "AACCGGTA"
// bank: ["AACCGGTA"]

// return: 1


// Example 2:

// start: "AACCGGTT"
// end:   "AAACGGTA"
// bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]

// return: 2


// Example 3:

// start: "AAAAACCC"
// end:   "AACCCCCC"
// bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]

// return: 3
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  if (start === end) return 0;
  let mutation = 0;
  const queue = [start];
  const map = { [start]: true };
  while (queue.length) {
    let size = queue.length;
    while (size > 0) {
      const curString = queue.shift();
      if (curString === end) {
        return mutation
      };
      for (let i = 0; i < bank.length; i++) {
        if (isNeighborhood(curString, bank[i])) {
          const next = bank.splice(i, 1)[0];
          if (!map[next]) {
            queue.push(next);
          }
          map[next] = true;
          i--;
        }
      }
      size -= 1;
    }
    mutation += 1;
  }
  return -1;
};

function isNeighborhood(a, b) {
  if (a === b) return false;
  let diffCount = 0;
  for (let i = 0, len = a.length; i < len; i++) {
    if (a[i] !== b[i]) diffCount++;
    if (diffCount > 1) return false;
  }
  return true;
}


// console.log("minMutation -> curString", curString)
// console.log("minMutation -> queue", queue)
// console.log("minMutation -> bank", bank)
// -1
// const start = "AACCTTGG";
// const end = "AATTCCGG";
// const bank = ["AATTCCGG", "AACCTGGG", "AACCCCGG", "AACCTACC"];
// 4
// const start = "AACCGGTT"
// const end = "AAACGGTA"
// const bank = ["AACCGATT", "AACCGATA", "AAACGATA", "AAACGGTA"]
// 5 AACCGATT
// 7 AACCGATA
// 2 AAACGATA
// 2 AAACGGTA
//8
// const start = "AAAAAAAA";
// const end = "CCCCCCCC";
// const bank = ["AAAAAAAA", "AAAAAAAC", "AAAAAACC", "AAAAACCC", "AAAACCCC", "AACACCCC", "ACCACCCC", "ACCCCCCC", "CCCCCCCA", "CCCCCCCC"];
//4
const start = "AAAACCCC";
const end = "CCCCCCCC";
const bank = ["AAAACCCA", "AAACCCCA", "AACCCCCA", "AACCCCCC", "ACCCCCCC", "CCCCCCCC", "AAACCCCC", "AACCCCCC"];
const result = minMutation(start, end, bank);
console.log("result", result)
