// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let l3 = null;
  let cur1 = l1;
  let cur2 = l2;
  let cur3 = l3;
  while (cur1 || cur2) {
    let min = null;
    if (cur1 === null || cur2 === null) {
      min = cur1 || cur2;
      if (cur1) {
        cur1 = cur1.next;
      } else {
        cur2 = cur2.next;
      }
    } else {
      if (cur1.val < cur2.val) {
        min = cur1;
        cur1 = cur1.next;
      } else {
        min = cur2;
        cur2 = cur2.next;
      }
    }
    if (cur3) {
      cur3.next = min;
      cur3 = cur3.next;
    } else {
      l3 = cur3 = min;
    }
    min.next = null;
  }
  return l3;
};


const ipt1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
const ipt2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
const result = mergeTwoLists(ipt1, ipt2);
console.log(JSON.stringify(result));