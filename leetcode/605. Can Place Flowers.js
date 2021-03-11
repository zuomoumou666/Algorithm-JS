// 605. Can Place Flowers
// Easy

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.



// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false


// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length



/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    const cur = flowerbed[i];
    if (cur === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1;
      n--;
    }
    if (n === 0) return true;
  }
  return false;
};

// const flowerbed = [1, 0, 0, 0, 1], n = 1;
// Output: true
// const flowerbed = [1, 0, 0, 0, 1], n = 2;
// Output: false

const flowerbed = [1, 0, 0, 0, 0, 1], n = 2;

console.log(canPlaceFlowers(flowerbed, n));