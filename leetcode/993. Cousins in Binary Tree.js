// 993. Cousins in Binary Tree

// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.



// Example 1:

// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  function find(root, value, depth) {
    if (!root) return null;
    if (root.left && root.left.val === value
      || root.right && root.right.val === value) return { depth, parent: root.val };
    return find(root.left, value, depth + 1)
      || find(root.right, value, depth + 1);
  }
  const resultX = find(root, x, 0);
  const resultY = find(root, y, 0);
  return resultX !== null
    && resultY !== null
    && resultX.depth === resultY.depth
    && resultX.parent !== resultY.parent;
};

// 1
//     2
//   3
//     4
//       5

const ipt = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: null,
        right: {
          val: 5,
        }
      }
    },
    right: null
  }
}
// const ipt = {
//   val: 0,
//   left: {
//     val: 2,
//     left: {
//       val: 1
//     },
//     right: {
//       val: 3,
//     }
//   },
//   right: {
//     val: 5,
//     left: {
//       val: 4,
//     },
//     right: {
//       val: 6,
//     }
//   }
// }

console.log(isCousins(ipt, 1, 4));