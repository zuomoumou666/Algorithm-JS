// 110. Balanced Binary Tree
// Easy

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true


// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

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
 * @return {boolean}
 */
// var isBalanced = function (root) {
//   if (!root) return true;
//   return compare(
//     getHeight(root.left),
//     getHeight(root.right),
//   )
// };

// function compare(left, right) {
//   if (left === false || right === false || Math.abs(left - right) > 1) return false;
//   return true;
// }

// function getHeight(root, height = 1) {
//   if (!root) return height - 1;
//   const left = getHeight(root.left, height + 1);
//   const right = getHeight(root.right, height + 1);
//   if (!compare(left, right)) return false;
//   return Math.max(left, right);
// }

var isBalanced = function (root) {
  if (!root) return true;
  return isBalanced(root.left)
    && isBalanced(root.right)
    && Math.abs(getHeight(root.left) - getHeight(root.right)) < 2;
};

function getHeight(node) {
  if (!node) return 0;
  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


const root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(
      3,
      new TreeNode(4),
      new TreeNode(4),
    ),
    new TreeNode(3),
  ),
  new TreeNode(
    2,
    null,
    // new TreeNode(3, null, new TreeNode(4)),
  ),
);

console.log(isBalanced(root));