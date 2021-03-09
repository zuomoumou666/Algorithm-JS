// 1502. Can Make Arithmetic Progression From Sequence
// Easy

// Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.



// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.


// Constraints:

// 2 <= arr.length <= 1000
// -10^6 <= arr[i] <= 10^6

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => (a - b));
  var dif = arr[1] - arr[0];
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== dif) {
      return false;
    }
  }
  return true;
};

// const arr = [3,5,1];
// const arr = [3,5,1,7,-1,-3];
// const arr = [1, 2];
// Output: true
const arr = [1, 2, 3, 0, 4, 5, 7];
// Output: false
console.log(canMakeArithmeticProgression(arr));