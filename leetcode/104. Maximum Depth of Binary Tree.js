// 104. Maximum Depth of Binary Tree

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

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
var maxDepth = function (root) {
  if (!root) return 0;
  function getDeep(root, deep) {
    let result = deep;
    if (root.left) {
      result = Math.max(result, getDeep(root.left, deep + 1));
    }
    if (root.right) {
      result = Math.max(result, getDeep(root.right, deep + 1));
    }
    return result;
  }
  return getDeep(root, 1);
};



const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 15,
    },
    right: {
      val: 7
    }
  },
  right: {
    val: 3,
    // left: {
    //   val: 15,
    // }, right: {
    //   val: 7
    // }
  }
}
console.log(maxDepth(root));