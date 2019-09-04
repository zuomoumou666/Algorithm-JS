// 404. Sum of Left Leaves
// Easy

// 737

// 83

// Favorite

// Share
// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
// Accepted
// 137,561
// Submissions
// 277,344

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let sum = 0;
  function recurAdd(node, isLeft) {
    if (!node) return 0;
    const { left, right } = node;
    if (isLeft && !left && !right) sum += node.val;
    if (left) recurAdd(left, true);
    if (right) recurAdd(right, false);
  }
  recurAdd(root, false);
  return sum;
};
// var sumOfLeftLeaves = function (root, isLeft) {
//   if (!root) return 0;
//   const { left, right } = root;
//   if (isLeft && !left && !right) return root.val;
//   return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
// };
// var sumOfLeftLeaves = function (root) {
//   if (!root) return 0;
//   let leaves = [root];
//   let sum = 0;
//   while (leaves.length) {
//     const { left, right } = leaves.pop();
//     if (left) {
//       leaves.push(left);
//       if (!left.left && !left.right) {
//         sum += left.val;
//       }
//     }
//     if (right) {
//       leaves.push(right);
//     }
//   }
//   return sum;
// };