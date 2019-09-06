// 1022. Sum of Root To Leaf Binary Numbers
// Easy

// 158

// 57

// Favorite

// Share
// Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

// Return the sum of these numbers.

// Input: [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22


// Note:

// The number of nodes in the tree is between 1 and 1000.
// node.val is 0 or 1.
// The answer will not exceed 2^31 - 1.

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
var sumRootToLeaf = function (root) {
  if (!root) return root;
  let result = 0;
  function traverse(cur, prePath) {
    if (!cur) return '';
    const { left, right, val } = cur;
    const path = `${prePath}${val}`;
    if (!left && !right) result += parseInt(path, 2);
    traverse(left, path);
    traverse(right, path);
  }
  traverse(root, '');
  return result;
};