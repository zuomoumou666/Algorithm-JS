// 470. Implement Rand10() Using Rand7()
// Medium

// Given the API rand7() that generates a uniform random integer in the range [1, 7], write a function rand10() that generates a uniform random integer in the range [1, 10]. You can only call the API rand7(), and you shouldn't call any other API. Please do not use a language's built-in random API.

// Each test case will have one internal argument n, the number of times that your implemented function rand10() will be called while testing. Note that this is not an argument passed to rand10().

// Follow up:

// What is the expected value for the number of calls to rand7() function?
// Could you minimize the number of calls to rand7()?


// Example 1:

// Input: n = 1
// Output: [2]
// Example 2:

// Input: n = 2
// Output: [2,8]
// Example 3:

// Input: n = 3
// Output: [3,8,10]


// Constraints:

// 1 <= n <= 105

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  let index = 41, row, column;
  while (index > 40) {
    row = rand7();
    column = rand7();
    index = column + (row - 1) * 7;
  }
  return 1 + (index - 1) % 10;
};
// var rand10 = function() {
//   let i = 7;
//   let j = 6;
//   while (i > 6) i = rand7(); // i could be 1, 2, 3, 4, 5, or 6
//   while (j > 5) j = rand7(); // j could be 1, 2, 3, 4, or 5
//   if (i % 2 === 0) { // if i end up being even (50% the chance because it could be 2, 4, 6)
//     return j; // return 1, 2, 3, 4, or 5
//   } else { //if i end up being odd (also 50% of the chance because it could be 1, 3, 5)
//     return j + 5; // return 6, 7, 8, 9, or 10
//   }
// };

var rand7 = function () {
  return Math.ceil(Math.random() * 7);
};

function test(n, fn) {
  const map = {};
  for (let i = 0; i < n; i++) {
    const result = fn();
    map[result] = map[result] === undefined ? 1 : map[result] + 1;
  }
  console.log("test -> map", JSON.stringify(map))
  return map;
}

const rate = (n, total) => test(total, rand10)[n] / total;

console.log(rate(3, 100000));
