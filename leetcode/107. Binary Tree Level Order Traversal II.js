// 107. Binary Tree Level Order Traversal II
// Easy

// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const result = [];
  if (!root) return result;
  const arr = [root];
  let i = arr.length;
  let curLevel = [];
  while (arr.length) {
    const node = arr.shift();
    i--;
    curLevel.push(node.val);
    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
    if (i === 0) {
      result.unshift(curLevel);
      curLevel = [];
      i = arr.length;
    }
  }
  return result;
};




function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


// const root = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(
//     20,
//     new TreeNode(15),
//     new TreeNode(7),
//   ),
// );

const root = null;


console.log(JSON.stringify(levelOrderBottom(root)));