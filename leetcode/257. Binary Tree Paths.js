// 257. Binary Tree Paths
// Easy

// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3
// Accepted
// 366,566
// Submissions
// 689,404

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
 * @return {string[]}
 */
// var binaryTreePaths = function (root) {
//   const paths = [];
//   if (!root) return paths;
//   const arr = [{ node: root, prePath: null }];
//   while (arr.length) {
//     const { node, prePath } = arr.shift();
//     const path = prePath ? `${prePath}->${node.val}` : `${node.val}`
//     if (!node.left && !node.right) {
//       paths.push(path);
//     }
//     if (node.left) arr.push({ node: node.left, prePath: path });
//     if (node.right) arr.push({ node: node.right, prePath: path });
//   }
//   return paths;
// };

// var binaryTreePaths = function (root) {
//   const paths = [];
//   if (!root) return paths;
//   function getPath(node, path) {
//     if (!node) return;
//     const p = path ? `${path}->${node.val}` : `${node.val}`;
//     if (!node.left && !node.right) {
//       paths.push(p);
//     };
//     if (node.left) getPath(node.left, p);
//     if (node.right) getPath(node.right, p);
//   }
//   getPath(root);
//   return paths;
// };
var binaryTreePaths = function (root) {
  if (!root) return [];
  if (!root.left && !root.right) return [`${root.val}`];
  const left = binaryTreePaths(root.left).map(p => `${root.val}->${p}`);
  const right = binaryTreePaths(root.right).map(p => `${root.val}->${p}`);
  return [...left, ...right];
};





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
console.log(binaryTreePaths(root));

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}