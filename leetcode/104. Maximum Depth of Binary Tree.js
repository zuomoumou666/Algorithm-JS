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
// var maxDepth = function (root) {
//   if (!root) return 0;
//   function getDeep(root, deep) {
//     let result = deep;
//     if (root.left) {
//       result = Math.max(result, getDeep(root.left, deep + 1));
//     }
//     if (root.right) {
//       result = Math.max(result, getDeep(root.right, deep + 1));
//     }
//     return result;
//   }
//   return getDeep(root, 1);
// };
// var maxDepth = function (root) {
//   if (!root) return 0;
//   function getDeep(root, deep) {
//     if (!root) return deep;
//     return Math.max(getDeep(root.right, deep + 1), getDeep(root.left, deep + 1));
//   }
//   return getDeep(root, 0);
// };
// var maxDepth = function (root) {
//   if (!root) return 0;
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };
var maxDepth = function (root) {
  if (!root) return 0;
  const arr = [root];
  let deep = 0;
  while (arr.length !== 0) {
    let len = arr.length;
    deep++;
    while (len) {
      const cur = arr.shift();
      len--;
      if (cur.left) arr.push(cur.left);
      if (cur.right) arr.push(cur.right);
    }
  }
  return deep;
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
    left: {
      val: 15,
    },
    right: {
      val: 7
    }
  }
}
console.log(maxDepth(root));