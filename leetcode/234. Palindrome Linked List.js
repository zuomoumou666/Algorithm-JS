// 234. Palindrome Linked List

// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

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
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let cur = head;
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next || fast.next;
  }
  slow = reverseLinkedList(slow.next);
  while (slow) {
    if (slow.val !== head.val) {
      return false;
    }
    slow = slow.next;
    head = head.next;
  }
  return true;
};

function reverseLinkedList(root) {
  let cur = root;
  let pre = null;
  let temp;
  while (cur) {
    temp = cur;
    cur = cur.next;
    temp.next = pre;
    pre = temp;
  }
  return pre;
}


const ipt = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 3,
        next: {
          val: 1,
          next: null
        }
      }
    }
  }
}

console.log(isPalindrome(ipt));