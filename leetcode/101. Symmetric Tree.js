// 101. Symmetric Tree

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3


// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3


// Note:
// Bonus points if you could solve it both recursively and iteratively.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function (root) {
//   if (!root) return true;
//   let arr = [root]
//   let left = [];
//   let right = [];
//   while (left.length || right.length || arr.length) {
//     const a = arr.shift();
//     const l = left.shift() || null;
//     const r = right.shift() || null;
//     if (a) {
//       if (a.left) {
//         left.push(a.left);
//       }
//       if (a.right) {
//         right.push(a.right);
//       }
//     } else {
//       if (l && r) {
//         if (l.val !== r.val) return false;
//         left.push(l.left);
//         left.push(l.right);
//         right.push(r.right);
//         right.push(r.left);
//       } else {
//         if (!(l === null && r === null)) return false;
//       }
//     }
//   }
//   return true;
// };
var isSymmetric = function (root) {
  if (!root) return true;
  function mirror(a, b) {
    if (a == null && b == null) return true;
    if (a == null || b == null) return false;
    return a.val === b.val && mirror(a.left, b.right) && mirror(a.right, b.left);
  }
  return mirror(root, root);
};

const ipt = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
    right: {
      val: 4,
    }
  },
  right: {
    val: 2,
    right: {
      val: 3,
    },
    left: {
      val: 4,
    }
  }
};


console.log(isSymmetric(ipt));
