// suppose you are a rich man, you have enough money which is $1, 5, 11.
// please get a way to meet a certain amount. you have to use a minimum of banknote.
const money = [3, 5, 11];
const count = 252;
// 1 : cost = f(14) + 1
// 5 : cost = f(10) + 1
// 11: cost = f(4) + 1
// 1 : f(n) = f(n-1) + 1
// 5 : f(n) = f(n-5) + 1
// 11: f(n) = f(n-11) + 1
// fn = min{f(n-1),f(n-5),f(n-11)} +1;
function findMinTimes(count) {
  const arr = [0];
  for (let i = 1; i < count + 1; i++) {
    let cost = null;
    if (i - 1 >= 0) { cost = arr[i - 1] + 1 }
    if (i - 5 >= 0) { cost = Math.min(arr[i - 5] + 1, cost) }
    if (i - 11 >= 0) { cost = Math.min(arr[i - 11] + 1, cost) }
    arr[i] = cost;
    // console.log(i, cost, arr);
  }
  // console.log(arr);
  return arr[count];
}

// function findMinTimesRecursive(count) {
//   let cost = null;
//   if (count === 1 || count === 5 || count === 11) {
//     return cost = 1;
//   }
//   if (count > 1) {
//     cost = findMinTimesRecursive(count - 1) + 1;
//   }
//   if (count > 5) {
//     cost = Math.min(findMinTimesRecursive(count - 5) + 1, cost);
//   }
//   if (count > 11) {
//     cost = Math.min(findMinTimesRecursive(count - 11) + 1, cost);
//   }

//   return cost;
// }

const cache = {};
function findMinTimesRecursive(count) {
  if (cache[count] !== undefined) return cache[count];
  let cost = null;
  if (count === 1 || count === 5 || count === 11) {
    cache[count] = 1;
    return cost = 1;
  }
  if (count > 1) {
    cost = findMinTimesRecursive(count - 1) + 1;
  }
  if (count > 5) {
    cost = Math.min(findMinTimesRecursive(count - 5) + 1, cost);
  }
  if (count > 11) {
    cost = Math.min(findMinTimesRecursive(count - 11) + 1, cost);
  }
  cache[count] = cost;
  return cost;
}

console.time('1');
console.log(findMinTimes(count));
console.timeEnd('1');


console.time('2');
console.log(findMinTimesRecursive(count));
console.timeEnd('2');
