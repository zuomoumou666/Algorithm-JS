// 235. Lowest Common Ancestor of a Binary Search Tree
// Easy

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”



// Example 1:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:


// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [2,1], p = 2, q = 1
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.
// Accepted
// 465,593
// Submissions
// 906,146


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
//   const { node: nodeP } = findNode(root, p);
//   const { node: nodeQ } = findNode(root, Q);
//   if (p === q) return nodeP;
//   let result;
// };


// function findNode(root, v) {
//   if (!root) return null;
//   if (root.val === v) return { node: root };
//   if (v < root.val) return findNode(root.left);
//   return findNode(root.right);
// }
// var lowestCommonAncestor = function (root, p, q) {
//   let result = root;
//   if (p === q) return p;
//   const arr = [root];
//   while (arr.length) {
//     const node = arr.shift();
//     if (node !== root) {
//       if (findNode(node, p) && findNode(node, q)) {
//         result = node;
//       }
//     }
//     if (node.left) arr.push(node.left);
//     if (node.right) arr.push(node.right);
//   }
//   return result;
// };

// function findNode(root, v) {
//   if (root === v) return root;
//   if (root.left && v.val < root.val) return findNode(root.left, v);
//   if (root.right && v.val > root.val) return findNode(root.right, v);
//   return null;
// }
// var lowestCommonAncestor = function (root, p, q) {
//   let result = root;
//   if (p === q) return p;
//   const pathP = findNode(root, p);
//   const pathQ = findNode(root, q);
//   let i = 0;
//   while (pathP[i] && (pathP[i] === pathQ[i])) {
//     result = pathP[i];
//     i++;
//   }
//   return result;
// };

// function findNode(root, v, path = []) {
//   if (root === v) return [...path, root];
//   if (root.left && v.val < root.val) return findNode(root.left, v, [...path, root]);
//   if (root.right && v.val > root.val) return findNode(root.right, v, [...path, root]);
//   return null;
// }
var lowestCommonAncestor = function (root, p, q) {
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};


function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}



const root = new TreeNode(
  6,
  new TreeNode(
    2,
    new TreeNode(0),
    new TreeNode(
      4,
      new TreeNode(3),
      new TreeNode(5),
    ),
  ),
  new TreeNode(
    8,
    new TreeNode(7),
    new TreeNode(9),
  ),
)

// [6,2,8,0,4,7,9,null,null,3,5]
// 2
// 4

// console.log(findNode(root, 3)); 

const p = root.left;
const q = root.left.left;
console.log(lowestCommonAncestor(root, p, q));
// const path = findNode(root, p);
// const path1 = findNode(root, q);
// console.log(path);