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

// var generateParenthesis = function (n) {
//   if (n <= 0) return null;
//   let result = ['()'];
//   let memory = { '()': true };
//   if (n === 1) return result;
//   for (let i = 2; i <= n; i++) {
//     let tempResult = [];
//     for (let j = 0; j < result.length; j++) {
//       const splitArr = split(result[j]);
//       const insertResult = insertOne(splitArr);
//       insertResult.forEach(iR => {
//         if (!memory[iR]) {
//           tempResult.push(iR);
//           memory[iR] = true;
//         }
//       });
//     }
//     result = tempResult;
//   }
//   return result;
// }

// function split(str) {
//   const arr = [];
//   let subStr = '';
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     subStr += str[i];
//     if (str[i] === '(') {
//       arr.push(')');
//     } else {
//       arr.pop();
//     }
//     if (!arr.length) {
//       result.push(subStr);
//       subStr = '';
//     }
//   }
//   return result;
// }

// function insertOne(splitArr) {
//   const result = [];
//   const memory = {};
//   for (let i = 0; i < splitArr.length; i++) {
//     if (i == 0) {
//       result.push(`()${splitArr.join('')}`);
//       memory[`()${splitArr.join('')}`] = true;
//     }
//     const slotArr = [...splitArr];
//     slotArr.splice(i, 1, `${splitArr[i]}()`);
//     const slotStr = slotArr.join('');
//     if (!memory[slotStr]) {
//       result.push(slotStr);;
//       memory[slotStr] = true;
//     }
//     const preArr = splitArr.slice(0, i);
//     for (let j = i; j < splitArr.length; j++) {
//       const shouldWrap = splitArr.slice(i, j + 1);
//       const pastArr = splitArr.slice(j + 1, splitArr.length);
//       const item = `(${shouldWrap.join('')})`;
//       const newStr = [...preArr, item, ...pastArr].join('');
//       if (!memory[newStr]) {
//         result.push(newStr);;
//         memory[newStr] = true;
//       }
//     }
//   }
//   return result;
// }


// const splitResult = split('()()');
// console.log(splitResult);
// console.log(insertOne(splitResult));

// const test = generateParenthesis(4);
// console.log(test);



// var generateParenthesis = function (n) {
//   if (n <= 0) return null;
//   if (n === 1) return ['()'];
//   let result = ['(', ')'];
//   for (let i = 1; i < n * 2; i++) {
//     const tempResult = [];
//     for (let j = 0; j < result.length; j++) {
//       tempResult.push(`${result[j]}(`, `${result[j]})`);
//     }
//     result = tempResult;
//   }
//   return result.filter(r => isValid(r));
// }

// function isValid(str) {
//   if (str.length % 2 !== 0 || str[0] !== '(') return false;
//   const arr = [];
//   let left = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(') {
//       arr.push(')');
//       left++;
//       if (left > str.length / 2) return false;
//     } else {
//       const cur = arr.pop();
//       if (!cur) return false;
//     }
//   }
//   return true;
// }

// console.log(isValid('(('));


var generateParenthesis = function (n) {
  var arr = [];
  compose(n, n, '');
  return arr;

  function compose(left, right, str) {
    if (!left && !right && str.length) return arr.push(str);
    if (left) compose(left - 1, right, str + '(');
    if (right > left) compose(left, right - 1, str + ')');
  }
};

const test = generateParenthesis(3);
console.log(test);