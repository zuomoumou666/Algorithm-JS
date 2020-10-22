// 2. Add Two Numbers
// Medium

// 9534

// 2398

// Add to List

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
const {
  ListNode,
  getList,
} = require('../utils')

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
//   let a = l1;
//   let b = l2;
//   let moreThan10 = false;
//   const result = [];
//   while (a || b) {
//     let count = (a ? a.val : 0) + (b ? b.val : 0) + (moreThan10 ? 1 : 0);
//     moreThan10 = count >= 10;
//     result.push(count % 10);
//     a = a ? a.next : null;
//     b = b ? b.next : null;
//   }
//   if (moreThan10) result.push(1);
//   return getList(result);
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   let a = l1;
//   let b = l2;
//   let moreThan10 = false;
//   const result = [];
//   while (a || b) {
//     let count = (a ? a.val : 0) + (b ? b.val : 0) + (moreThan10 ? 1 : 0);
//     moreThan10 = count >= 10;
//     result.push(count % 10);
//     a = a ? a.next : null;
//     b = b ? b.next : null;
//   }
//   if (moreThan10) result.push(1);
//   return getList(result);
// };
var addTwoNumbers = function (l1, l2) {
  let a = l1;
  let b = l2;
  let moreThan10 = false;
  let start;
  let result;
  while (a || b) {
    let count = (a ? a.val : 0) + (b ? b.val : 0) + (moreThan10 ? 1 : 0);
    moreThan10 = count >= 10;
    if (result) {
      result.next = new ListNode(count % 10);
      result = result.next;
    } else {
      result = new ListNode(count % 10);
      start = result;
    }
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (moreThan10) result.next = new ListNode(1);
  return start;
};




// const l1 = [2, 4, 3]
// const l2 = [5, 6, 4]
const l1 = [9, 9, 9, 9, 9, 9, 9]
const l2 = [9, 9, 9, 9]
const a1 = getList(l1);
console.log("a1", a1)
const a2 = getList(l2);

const result = addTwoNumbers(a1, a2);
console.log("result", result)