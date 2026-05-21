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
var removeNthFromEnd = function (head, n) {
  let sentinialNode = new ListNode();
  sentinialNode.next = head;

  // Move First pointer by n

  let first = sentinialNode;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  // Move both pointer unitl first pointer reaches last node

  let second = sentinialNode;

  while (first.next) {
    first = first.next;
    second = second.next;
  }
  // delete

  second.next = second.next.next;

  return sentinialNode.next;
};
