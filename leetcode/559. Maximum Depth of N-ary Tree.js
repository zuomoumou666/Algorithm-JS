// 559. Maximum Depth of N-ary Tree

// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// For example, given a 3-ary tree:






// We should return its max depth, which is 3.



// Note:

// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  let amount = 1;
  let deep = 0;
  let curLevelLen = 1;
  let nexLevelLen = 0;
  let arr = [root];
  if (!root) return 0;
  if (!root.children || root.children.length === 0) return 1;
  while (arr.length) {
    const curNode = arr.shift();
    curLevelLen--;
    amount++;
    if (curNode.children && curNode.children.length > 0) {
      nexLevelLen += curNode.children.length;
      arr = arr.concat(curNode.children);
    }
    if (curLevelLen === 0) {
      deep++;
      curLevelLen = nexLevelLen;
      nexLevelLen = 0;
    }
  }
  return deep;
};
// const data = {
//   "$id": "1",
//   "children": [
//     {
//       "$id": "2",
//       "children": [
//         {
//           "$id": "5",
//           "children": [],
//           "val": 5
//         },
//         {
//           "$id": "6",
//           "children": [], "val": 6
//         }
//       ], "val": 3
//     },
//     {
//       "$id": "3",
//       "children": [],
//       "val": 2
//     },
//     {
//       "$id": "4",
//       "children": [],
//       "val": 4
//     }
//   ],
//   "val": 1
// }


const data = {
  "$id": "1",
  "children": [
    {
      "$id": "2",
      "children": [
        {
          "$id": "3",
          "children": [],
          "val": 5
        }],
      "val": 1
    }],
  "val": 3
}

console.log(maxDepth(data));