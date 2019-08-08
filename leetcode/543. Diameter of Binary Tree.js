// 543. Diameter of Binary Tree
// Easy

// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree 
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.


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
var diameterOfBinaryTree = function (root) {
  let result = 0;
  if (!root) return result;
  const getDiameter = (node) => {
    if (!node) return 0;
    const l = getDiameter(node.left);
    const r = getDiameter(node.right);
    result = Math.max(result, l + r + 1);
    return Math.max(l, r) + 1;
  };
  getDiameter(root);
  return result - 1;
};

const ipt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5,
    }
  },
  right: {
    val: 3,
  }
}

console.log(diameterOfBinaryTree(ipt));