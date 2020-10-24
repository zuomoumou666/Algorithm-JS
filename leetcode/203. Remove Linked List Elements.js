// 203. Remove Linked List Elements
// Easy

// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5
const {
  ListNode,
  getList,
} = require('../utils')


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let init = { val: null, next: head };
  let pre = init;
  let cur = pre.next;
  while (cur) {
    if (cur && cur.val === val) {
      pre.next = cur.next;
    } else {
      pre = cur;
    }
    cur = cur.next;
  }
  return init.next;
};


const arr = [6];
// const arr = [6, 1, 2, 6, 6, 3, 4, 5, 6, 6];
const val = 6;
const list = getList(arr);

const result = removeElements(list, val);
console.log("result", result)