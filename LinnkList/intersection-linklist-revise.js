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
  // add headB list in set
  let listSet = new Set();
  while (headB) {
    listSet.add(headB);
    headB = headB.next;
  }

  // loop on headA linklist and check it already exists in set if yes return headA
  while (headA) {
    if (listSet.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  // elese return null

  return null;
};
