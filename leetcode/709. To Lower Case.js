// 709. To Lower Case

// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.



// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let result = '';
  for (let i = 0, len = str.length; i < len; i++) {
    const charNum = str[i].charCodeAt();
    result = result + ((charNum <= 90 && charNum >= 65) ? String.fromCharCode(charNum + 32) : str[i]);
  }
  return result;
};

console.log(toLowerCase('Abc'));