// 125. Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false


/**
 * @param {string} s
 * @return {boolean}
 */
const add = (n) => () => {
  n++;
  return n;
};
const dec = (n) => () => {
  n--;
  return n;
};
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    let sS, sE;
    [sS, start] = getStr(s, add(start - 1));
    [sE, end] = getStr(s, dec(end + 1));
    if (sS !== sE) return false;
    start++;
    end--;
  }
  return true;
};


function getStr(str, fn) {
  let index = fn();
  if (index >= str.length || index < 0) return ['', index];
  if (/\w/.test(str[index])) {
    return [str[index].toLowerCase(), index]
  }
  return getStr(str, fn);
}


// const Input = "A man, a plan, a canal: Panama";
// const Input = "race a car";
const Input = " ";
console.log(isPalindrome(Input));

// console.log(getStr(Input, add(-1)));


// let a = add(1);
// console.log(a());
// console.log(a());