/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  //  add head b in list

  let uniqueSet = new Set();

  while (headB) {
    uniqueSet.add(headB);
    headB = headB.next;
  }
  // check does it exits

  while (headA) {
    if (uniqueSet.has(headA)) {
      return headA;
    }

    headA = headA.next;
  }

  return null;
};
