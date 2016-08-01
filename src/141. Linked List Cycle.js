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
// TODO: to be revised
var hasCycle = function(head) {
    if (head === null) return false;
    var loop = function (node) {
        if (node.visited) return true;
        node.visited = true;
        if (node.next === null) {
            return false;
        }
        return loop(node.next);
    };
    return loop(head);
};