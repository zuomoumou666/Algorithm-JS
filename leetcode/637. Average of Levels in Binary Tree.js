// 637. Average of Levels in Binary Tree
// Easy

// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var averageOfLevels = function (root) {
//   const result = [];
//   const arr = [root];
//   let i = arr.length;
//   let len = i;
//   let sum = 0;
//   while (arr.length) {
//     const cur = arr.shift();
//     i -= 1;
//     sum += cur.val || 0;
//     if (cur.left) arr.push(cur.left);
//     if (cur.right) arr.push(cur.right);
//     if (i === 0) {
//       result.push(sum / len);
//       sum = 0;
//       i = arr.length;
//       len = i;
//     }
//   }
//   return result;
// };
var averageOfLevels = function (root) {
  const sums = [];
  bfs(root, sums, 0);
  return sums.map(sum => {
    return sum.reduce((p, c) => (p + c), 0) / sum.length;
  });
};

function bfs(node, sums, i) {
  if (!node) return;
  sums[i] = sums[i] ? [...sums[i], node.val] : [node.val];
  bfs(node.left, sums, i + 1);
  bfs(node.right, sums, i + 1);
}

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


const root = new TreeNode(
  3,
  new TreeNode(
    9,
  ),
  new TreeNode(
    20,
    new TreeNode(15),
    new TreeNode(7),
  ),
);


console.log(averageOfLevels(root));