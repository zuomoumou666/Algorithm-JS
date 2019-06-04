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
  let l3 = { next: null };
  let crt = l3;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      crt.next = l1;
      l1 = l1.next;
    } else {
      crt.next = l2;
      l2 = l2.next;
    }
    crt = crt.next;
  }
  crt.next = l2 || l1;
  return l3.next;
};


// var mergeTwoLists = function (l1, l2) {
//   let l3 = null;
//   let crt = null;
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       crt = l1;
//       l1 = l1.next;
//     } else {
//       crt = l2;
//       l2 = l2.next;
//     }
//     if (crt) {
//       crt.next = crt;
//     } else {
//       l3 = crt;
//     }
//   }
//   return l3;
// };

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
    next: null
  }
}
// const ipt1 = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// }
// const ipt2 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: {
//       val: 4,
//       next: null
//     }
//   }
// }
const result = mergeTwoLists(ipt1, ipt2);
console.log(JSON.stringify(result));