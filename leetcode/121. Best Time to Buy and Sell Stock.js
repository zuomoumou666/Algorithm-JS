// 121. Best Time to Buy and Sell Stock

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.


/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let profit = 0;
//   for (let i = 0, len = prices.length; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       profit = Math.max(profit, prices[j] - prices[i]);
//     }
//   }
//   return profit;
// };
// var maxProfit = function (prices) {
//   let min = Number.MAX_SAFE_INTEGER;
//   let max = 0;
//   for (let i = 0, len = prices.length; i < len; i++) {
//     min = Math.min(min, prices[i]);
//     max = Math.max(max, prices[i] - min);
//   }
//   return max;
// };
var maxProfit = function (prices) {
  let min = Math.min(prices[0], Number.MAX_SAFE_INTEGER);
  let max = 0;
  const dp = [0]
  for (let i = 1, len = prices.length; i < len; i++) {
    min = Math.min(min, prices[i]);
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
    max = Math.max(dp[i], max);
  }
  return max;
};

const ipt = [7, 1, 5, 3, 6, 4];
// const ipt = [7, 6, 4, 3, 1];
console.log(maxProfit(ipt));