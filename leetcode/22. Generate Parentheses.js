// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]


/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  if (n <= 0) return null;
  let result = ['()'];
  if (n === 1) return result;
  for (let i = 2; i <= n; i++) {
    let tempResult = [];
    for (let j = 0; j < result.length; j++) {
      const splitArr = split(result[j]);
      tempResult = tempResult.concat(insertOne(splitArr));
    }
    result = [...new Set(tempResult)];
  }
  return result;
}

function split(str) {
  const arr = [];
  let subStr = '';
  const result = [];
  for (let i = 0; i < str.length; i++) {
    subStr += str[i];
    if (str[i] === '(') {
      arr.push(')');
    } else {
      arr.pop();
    }
    if (!arr.length) {
      result.push(subStr);
      subStr = '';
    }
  }
  return result;
}

function insertOne(splitArr) {
  const result = [];
  const memory = {};
  for (let i = 0; i < splitArr.length; i++) {
    if (i == 0) {
      result.push(`()${splitArr.join('')}`);
      memory[`()${splitArr.join('')}`] = true;
    }
    const slotArr = [...splitArr];
    slotArr.splice(i, 1, `${splitArr[i]}()`);
    const slotStr = slotArr.join('');
    if (!memory[slotStr]) {
      result.push(slotStr);;
      memory[slotStr] = true;
    }
    const preArr = splitArr.slice(0, i);
    for (let j = i; j < splitArr.length; j++) {
      const shouldWrap = splitArr.slice(i, j + 1);
      const pastArr = splitArr.slice(j + 1, splitArr.length);
      const item = `(${shouldWrap.join('')})`;
      const newStr = [...preArr, item, ...pastArr].join('');
      if (!memory[newStr]) {
        result.push(newStr);;
        memory[newStr] = true;
      }
    }
  }
  return result;
}


const splitResult = split('()()');
console.log(splitResult);
console.log(insertOne(splitResult));

const test = generateParenthesis(4);
console.log(test);

// console.log(generateParenthesis(3));