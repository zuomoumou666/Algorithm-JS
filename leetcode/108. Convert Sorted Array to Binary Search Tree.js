// 108. Convert Sorted Array to Binary Search Tree

// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// var sortedArrayToBST = function (nums) {
//   const mid = Math.floor(nums.length / 2);
//   const node = new TreeNode(nums[mid]);
//   let n = 1;
//   while (n <= mid) {
//     addNode(node, nums[mid - n]);
//     addNode(node, nums[mid + n]);
//     n++;
//   }
//   return node;
// };
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// function addNode(node, val) {
//   if (!node) {
//     return new TreeNode(val);
//   }
//   if (node.val < val) {
//     node.right = addNode(node.right, val);
//   } else {
//     node.left = addNode(node.left, val);
//   }
//   return node;
// }

var sortedArrayToBST = function (nums) {
  return genNode(nums, 0, nums.length - 1);
};

var genNode = function (nums, start, end) {
  if (start > end) {
    return null;
  }
  var mid = start + parseInt((end - start) / 2);
  var node = new TreeNode(nums[mid]);
  node.left = genNode(nums, start, mid - 1);
  node.right = genNode(nums, mid + 1, end);
  return node;
}



const ipt = [-10, -3, 0, 5, 9];
console.log(JSON.stringify(sortedArrayToBST(ipt)));