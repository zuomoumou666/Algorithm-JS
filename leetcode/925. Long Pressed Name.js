// 925. Long Pressed Name
// Easy

// Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.



// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
// Example 3:

// Input: name = "leelee", typed = "lleeelee"
// Output: true
// Example 4:

// Input: name = "laiden", typed = "laiden"
// Output: true
// Explanation: It's not necessary to long press any character.


// Note:

// name.length <= 1000
// typed.length <= 1000
// The characters of name and typed are lowercase letters.

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  const len = name.length;
  const lenT = typed.length;
  let n = 0;
  let m = 0;
  let pre = name[0];
  while (n < len) {
    if (typed[m] === name[n]) {
      pre = name[n];
      n++;
      m++;
    } else {
      if (typed[m] !== pre || m >= lenT) return false;
      m++;
    }
  }
  return true;
};


// const name = "alex";
// const typed = "aaleex";
const name = "saeed"
const typed = "ssaaedd"

console.log(isLongPressedName(name, typed));