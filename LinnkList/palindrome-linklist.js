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
    // Find the middle 
    let slow = head;
    let fast = head
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // Reverse the Linklist from middle pointer 
    let prev = null;
    let curr = slow;

    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }
    // compare both first half and second half 
    let firstList = head;
    let secondList = prev;

    while (secondList !== null) {
        if (secondList.val !== firstList.val) {
            return false;
        }
        secondList = secondList.next;
        firstList = firstList.next;
    }

    return true;
};