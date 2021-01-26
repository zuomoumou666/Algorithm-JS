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
var findMode = function (root) {
  if (!root) return [];
  const map = {};
  const arr = [root];
  let most = 0;
  while (arr.length) {
    const node = arr.shift();
    map[node.val] = map[node.val] ? map[node.val] + 1 : 1;
    most = Math.max(most, map[node.val]);
    if (node.left) arr.push(node.left);
    if (node.right) arr.push(node.right);
  }
  return Object.keys(map).filter(k => map[k] === most);
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const root = new TreeNode()