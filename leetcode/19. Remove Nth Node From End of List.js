// 19. Remove Nth Node From End of List
// Medium

// Add to List

// Share
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?



// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]


// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let index = 0;
//   const map = {};
//   let cur = head;
//   while (cur) {
//     map[index] = cur;
//     index++;
//     cur = cur.next;
//   }
//   const beforeTarget = map[index - n - 1];
//   const target = map[index - n];
//   if (index === n) {
//     return head.next;
//   }
//   if (beforeTarget && target) {
//     beforeTarget.next = target.next || null;
//   }
//   return head;
// };
var removeNthFromEnd = function (head, n) {
  let first = head;
  let second = new ListNode(0, head);
  const init = second;
  while (n--) {
    first = first.next;
  }
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return init.next;
};

const head = [1, 2, 3, 4, 5], n = 2;
// const head = [1, 2, 3, 4, 5, 6, 7, 8], n = 3;
// const head = [1], n = 1

const list = getList(head);

const newList = removeNthFromEnd(list, n);
console.log("newList", newList);