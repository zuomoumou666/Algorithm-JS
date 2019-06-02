// 20. Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const arr = [];
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0, len = s.length; i < len; i++) {
    const cur = s[i];
    if (hash[cur]) {
      arr.push(hash[cur]);
    } else {
      const last = arr.pop();
      if (last !== cur) {
        return false;
      }
    }
  }
  return arr.length === 0;
};

// const ipt = '()';
const ipt = '()[]{}';
// const ipt = "(]";
// const ipt = "([)]";
// const ipt = "{[]}";
// const ipt = "";
// const ipt = "((";
// const ipt = "))";
console.log(isValid(ipt));