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
var swapPairs = function(head) {
    if (head === null || head.next === null) return head;

    var left = head;
    var right = head.next;

    var newHead = head.next;
    var next = right.next;


    right.next = left;
    left.next = swapPairs(next);

    return newHead;
};
