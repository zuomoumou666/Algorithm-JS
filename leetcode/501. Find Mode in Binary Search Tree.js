// 501. Find Mode in Binary Search Tree
// Easy

// 1193

// 394

// Add to List

// Share
// Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.


// For example:
// Given BST [1,null,2,2],

//    1
//     \
//      2
//     /
//    2


// return [2].

// Note: If a tree has more than one mode, you can return them in any order.

// Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

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
// var findMode = function (root) {
//   if (!root) return [];
//   const map = {};
//   const arr = [root];
//   let most = 0;
//   let result = [];
//   while (arr.length) {
//     const node = arr.shift();
//     map[node.val] = map[node.val] ? map[node.val] + 1 : 1;
//     if (map[node.val] > most) {
//       most = map[node.val];
//       result = [node.val];
//     } else if (map[node.val] === most) {
//       result.push(node.val);
//     }
//     if (node.left) arr.push(node.left);
//     if (node.right) arr.push(node.right);
//   }
//   return result;
// };
var findMode = function (root) {
  if (!root) return [];
  let count = 0;
  let max = -Infinity;
  let cur;
  let result = [];
  const inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    count = cur === node.val ? count + 1 : 1;
    cur = node.val;
    if (count > max) {
      result = [node.val];
      max = count;
    } else if (max === count) {
      result.push(node.val);
    }
    inOrder(node.right);
  };
  inOrder(root);
  return result;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode(
  1,
  null,
  new TreeNode(
    2,
    new TreeNode(2)
  )
)

console.log(findMode(root));