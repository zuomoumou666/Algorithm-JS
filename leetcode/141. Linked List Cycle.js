// 141. Linked List Cycle
// Easy

// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.



// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   const map = new Map();
//   while (head) {
//     if (map.get(head)) return true;
//     map.set(head, true);
//     head = head.next;
//   }
//   return false;
// };
var hasCycle = function (head) {
  if (!head) return false;
  let runner = head;
  while (head && runner.next && runner.next.next) {
    if (head.next === runner.next.next) return true;
    head = head.next;
    runner = runner.next.next;
  }
  return false;
};