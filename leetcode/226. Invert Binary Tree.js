// 226. Invert Binary Tree
// Easy

// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:

// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
// Accepted
// 630,619
// Submissions
// 947,342


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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  const left = root.left;
  const right = root.right;
  root.right = invertTree(left);
  root.left = invertTree(right);
  return root;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}



const root = new TreeNode(
  4,
  new TreeNode(
    2,
    new TreeNode(
      new TreeNode(
        1
      ),
      new TreeNode(3),
    ),
  ),
  new TreeNode(
    7,
    new TreeNode(6),
    new TreeNode(9),
  )
)

const result = invertTree(root);
console.log("🚀 ~ file: 226. Invert Binary Tree.js ~ line 72 ~ result", result)
