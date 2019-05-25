// 278. First Bad Version

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example:

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  function getMid(min, max) {
    let mid = parseInt((max + min) / 2);
    return mid;
  }

  return function (n) {
    let result = null;
    if (n === 1) return 1;
    let min = 1;
    let max = n;
    let mid = getMid(min, max);
    while (!result && mid <= n && mid > 0) {
      if (isBadVersion(mid)) {
        if (mid === min) return mid;
        max = mid
        mid = getMid(min, max);
      } else {
        if (isBadVersion(mid + 1)) {
          result = mid + 1;
        } else {
          min = mid;
          mid = getMid(mid, max);
        }
      }
    }
    return result;
  };
};

const num = 100
// const num = 2126753390
const bad = 54;
// const bad = 1702766719;
const isBadVersion = function (version) {
  return version >= bad;
};

const fn = solution(isBadVersion);

console.log(fn(num));