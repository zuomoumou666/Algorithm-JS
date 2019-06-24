// 412. Fizz Buzz

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function (n) {
//   return new Array(n).fill(1).map((v, i) => {
//     const index = i + 1;
//     if (index % 15 === 0) {
//       return "FizzBuzz";
//     }
//     if (index % 3 === 0) {
//       return "Fizz";
//     }
//     if (index % 5 === 0) {
//       return "Buzz";
//     }
//     return `${index}`;
//   });
// };
var fizzBuzz = function (n) {
  return new Array(n).fill(0).map((v, i) => (`${++i % 3 === 0 ? "Fizz" : ""}${i % 5 === 0 ? "Buzz" : ""}` || `${i}`));
};
const result = fizzBuzz(15);
console.log(result);