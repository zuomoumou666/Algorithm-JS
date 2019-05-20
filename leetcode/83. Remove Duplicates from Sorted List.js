// 83. Remove Duplicates from Sorted List

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function (head) {
//   let curNode = head;
//   let preNode = null;
//   if (!head) return null;
//   while (!preNode || preNode.next) {
//     if (preNode && preNode.val === curNode.val) {
//       preNode.next = curNode.next;
//       curNode = curNode.next;
//     } else {
//       preNode = curNode;
//       curNode = curNode.next;
//     }
//   }
//   return head;
// };

var deleteDuplicates = function(head) {
  var current = head;
  
  while(current) {
      if(current.next !== null && current.val == current.next.val) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }
  
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(2);
a.next = b;
b.next = c;
const result = deleteDuplicates(a);
console.log(result);