// 112. Path Sum
// Easy
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

// Accepted
// 560,478
// Submissions
// 1,331,270


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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false;
  const num = sum - root.val;
  if (!root.left && !root.right && num === 0) return true;
  return hasPathSum(root.left, num) || hasPathSum(root.right, num);
};


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}




const root = new TreeNode(
  -2,
  null,
  new TreeNode(
    -3,
  ),
);
const sum = -5;

console.log(hasPathSum(root, sum));
// const root = new TreeNode(
//   5,
//   new TreeNode(
//     4,
//     new TreeNode(
//       11,
//       new TreeNode(7),
//       new TreeNode(2),
//     ),
//   ),
//   new TreeNode(
//     8,
//     new TreeNode(13),
//     new TreeNode(4,
//       null,
//       new TreeNode(1)
//     ),
//   ),
// );