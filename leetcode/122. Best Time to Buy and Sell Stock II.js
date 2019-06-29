// 122. Best Time to Buy and Sell Stock II
// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
// dp = Math.max(dp[i+1]+dp[i],)

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let profit = 0;
//   let i = 0;
//   let len = prices.length;
//   while (i < len) {
//     if (prices[i + 1] <= prices[i]) {
//       i++;
//       continue;
//     } else {
//       let j = i + 1;
//       while (j < len && prices[j] > prices[j - 1]) {
//         j++;
//       }
//       profit += prices[j - 1] - prices[i];
//       i = j;
//     }
//   }
//   return profit;
// };
// var maxProfit = function (prices) {
//   let profit = 0;
//   let i = 0;
//   let len = prices.length;
//   let valley = prices[0];
//   let peak = prices[0];
//   while (i < len - 1) {
//     while (i < len - 1 && prices[i + 1] <= prices[i]) {
//       i++;
//     }
//     valley = prices[i]
//     while (i < len - 1 && prices[i + 1] >= prices[i]) {
//       i++;
//     }
//     peak = prices[i];
//     profit += peak - valley;
//   }
//   return profit;
// };
// var maxProfit = function (prices) {
//   let profit = 0;
//   let i = 1;
//   let len = prices.length;
//   while (i < len) {
//     if (prices[i] >= prices[i - 1]) {
//       profit += prices[i] - prices[i - 1];
//     }
//     i++;
//   }
//   return profit;
// };
var maxProfit = function (prices) {
  let dp = [];
  let i = 1;
  while (i < prices.length) {
    dp.push(prices[i] - prices[i - 1]);
    i++;
  }
  return dp.reduce((a, c) => {
    if (c > 0) {
      a += c;
    }
    return a;
  }, 0);
};
// [0, -6, -2, -4, -1, -3];
// [0, 0, 4, 2, 5, 3]
// [0, 0, 0, -2, 1, -1]
// [0, 0, 0, 0, 3, 1]
// [0, 0, 0, 0, 0, -2]
// [0, 0, 0, 0, 0, 0]
// -----------------------
//   [0, 1, 2, 3, 4]
//   [0, 0, 1, 2, 3]
//   [0, 0, 0, 1, 2]
//   [0, 0, 0, 0, 1]
const Input = [7, 1, 5, 3, 6, 4];
// const Input = [1, 2, 3, 4, 5];
// const Input = [6, 1];

[-6, 4, -2, 3, -2]

console.log(maxProfit(Input));
