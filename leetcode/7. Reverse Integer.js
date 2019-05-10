/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   const max = Math.pow(2, 31) - 1;
//   const min = - Math.pow(2, 31);
//   const str = Math.abs(x) + '';
//   let result = str.split('').reverse().join('');
//   result = x < 0 ? 0 - result : result - 0;
//   if (result < min || result > max) return 0;
//   return result;
// };

// var reverse = function (x) {
//   const max = Math.pow(2, 31) - 1;
//   const min = - Math.pow(2, 31);
//   let result = parseInt((Math.abs(x) + "").split('').reverse().join(''), 10) * Math.sign(x);
//   if (result < min || result > max) return 0;
//   return result;
// };

var reverse = function (x) {
  const max = Math.pow(2, 31) - 1;
  const min = - Math.pow(2, 31);
  const str = Math.abs(x) + '';
  const len = str.length;
  let newStr = '';
  for (let i = len - 1; i >= 0; i--) {
    newStr += str[i];
  }
  let result = parseInt(newStr, 10) * Math.sign(x);
  if (result < min || result > max) return 0;
  return result;
};
console.log(reverse(-1563847412));