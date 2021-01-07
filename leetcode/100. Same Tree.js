// 100. Same Tree
// Easy

// 2802

// 76

// Add to List

// Share
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//   const arr = [p, q];
//   while (arr.length) {
//     const a = arr.pop();
//     const b = arr.pop();
//     if (a === null && b === null) continue;
//     if (a && b && a.val === b.val) {
//       arr.push(a.left);
//       arr.push(b.left);
//       arr.push(a.right);
//       arr.push(b.right);
//       continue;
//     }
//     return false;
//   }
//   return true;
// };

// var isSameTree = function (p, q) {
//   if (p && q && p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
//   if (p === null && q === null) return true;
//   return false;
// };
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


// const a = new TreeNode(1, new TreeNode(2));
// const b = new TreeNode(1, null, new TreeNode(2));
const a = new TreeNode(1, new TreeNode(2));
const b = new TreeNode(1, new TreeNode(2));

console.log(isSameTree(a, b));