// 938. Range Sum of BST
// Easy

// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

// The binary search tree is guaranteed to have unique values.



// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23


// Note:

// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  const arr = [root];
  let result = 0;
  while (arr.length) {
    const cur = arr.pop();
    if (!cur) {
      continue;
    }
    if (cur.val <= R) {
      arr.push(cur.right);
    }
    if (cur.val >= L) {
      arr.push(cur.left);
    }
    if (cur.val <= R && cur.val >= L) {
      result = result + cur.val;
    }
  }
  return result;
};

//  L=2 R=8
//       5
//    3     10
//  1   4  9   11
//  L=7 R=15
//       10
//    5     15
//  3   7  null   18


const data = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    }
  },
  right: {
    val: 10,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 11,
      left: null,
      right: null,
    },
  }
};

console.log(rangeSumBST(data, 1, 5));