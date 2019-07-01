// 206. Reverse Linked List

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

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
// var reverseList = function (head) {
//   let pre = null;
//   let cur = head;
//   let temp;
//   while (cur) {
//     temp = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = temp;
//   }
//   return pre;
// };
var reverseList = function (head) {
  let newHead = null;
  let temp = null;
  while (head) {
    temp = head;
    head = head.next;
    temp.next = newHead;
    newHead = temp;
  }
  return newHead;
};
// var reverseList = function (head, pre) {
//   if (!head) return head;
//   let next = head.next;
//   head.next = pre || null;
//   return next ? reverseList(next, head) : head;
// };
var reverseList = function (head) {
  if (!head || head.next === null) return head;
  const pre = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return pre;
};


const ipt = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    }
  }
}
const result = reverseList(ipt);
console.log(JSON.stringify(result));