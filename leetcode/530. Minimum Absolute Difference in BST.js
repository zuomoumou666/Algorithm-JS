// 530. Minimum Absolute Difference in BST
// Easy

// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

// Example:

// Input:

//    1
//     \
//      3
//     /
//    2

// Output:
// 1

// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).


// Note:

// There are at least two nodes in this BST.
// This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

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
 * @return {number}
 */
// var getMinimumDifference = function (root) {
//   if (!root || !root.left && !root.right) return Infinity;
//   let l = Infinity;
//   let r = Infinity;
//   if (root.left) l = Math.abs((getLastNode(root.left, 'right') || root.left).val - root.val);
//   if (root.right) r = Math.abs((getLastNode(root.right, 'left') || root.right).val - root.val);
//   return Math.min(getMinimumDifference(root.left), getMinimumDifference(root.right), l, r);
// };

// function getLastNode(root, direction) {
//   if (!root) return null;
//   if (root[direction]) return getLastNode(root[direction], direction);
//   return root[direction] || root;
// }

var getMinimumDifference = function (root) {
  var prev = Infinity;
  var totalMin = Infinity;
  function traverse(node) {
    if (!node) {
      return;
    }
    traverse(node.left);
    totalMin = Math.min(totalMin, Math.abs(node.val - prev));
    prev = node.val;
    traverse(node.right);
  }
  traverse(root);
  return totalMin;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// [236,104,701,null,227,null,911]
const root = new TreeNode(
  236,
  new TreeNode(
    104,
    null,
    new TreeNode(227)
  ),
  new TreeNode(
    701,
    null,
    new TreeNode(911),
  )
);
// const root = new TreeNode(
//   1,
//   null,
//   new TreeNode(
//     3,
//     new TreeNode(2),
//   )
// );

// console.log(getLastNode(root, 'right'));
console.log(getMinimumDifference(root));