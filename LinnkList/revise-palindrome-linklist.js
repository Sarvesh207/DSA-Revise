/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // Find the middle use heres and tortule

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;
  // then we will revere second laf linklist

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // compare with it with first half
  let firstHalf = head;
  let secondHalf = prev;
  while (secondHalf) {
    if (secondHalf.val !== firstHalf.val) {
      return false;
    } else {
      secondHalf = secondHalf.next;
      firstHalf = firstHalf.next;
    }
  }

  return true;
};
