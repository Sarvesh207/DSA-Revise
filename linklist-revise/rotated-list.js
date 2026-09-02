/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

    if(!head || !head.next) return head;

    // Calculate Length
    let length = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        length++
    }

    // handle k to do from extra rotation
    k = k % length;

    // move s by k position
    let f = head;
    let s = head;
    for (let i = 0; i < k; i++) {
        s = s.next;
    }

    // move s to last node
    while (s.next) {

        s = s.next;
        f = f.next;
    }

    s.next = head;

    let newHead = f.next; ;
    f.next = null;



    return newHead;




};


////**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;

    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l;

    return r;
};
