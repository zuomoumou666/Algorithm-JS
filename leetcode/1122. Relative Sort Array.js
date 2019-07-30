// 1122. Relative Sort Array
// Easy

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.



// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]


// Constraints:

// arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// Each arr2[i] is distinct.
// Each arr2[i] is in arr1.


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const hash = {};
  arr2.forEach((v, i) => {
    hash[v] = i;
  });

  return arr1.sort((a, b) => {
    if (hash[a] !== undefined && hash[b] !== undefined) {
      return hash[a] - hash[b];
    }
    if (hash[a] !== undefined) {
      return -1;
    }
    if (hash[b] !== undefined) {
      return 1;
    }
    return a - b;
  });
};


const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];
const result = relativeSortArray(arr1, arr2);

console.log(result);