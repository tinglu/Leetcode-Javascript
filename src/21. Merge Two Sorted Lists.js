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
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;

    var merge = function(l1, l2, mergedList) {
        if (l1 === null && l2 === null) return mergedList;

        while (l1 !== null && (l2 === null || (l2 !== null && l1.val < l2.val))) {
            mergedList.push(l1.val);
            l1 = l1.next;
        }

        if (l1 !== null && l2 !== null && l1.val === l2.val) {
            mergedList.push(l1.val);
            l1 = l1.next;
            mergedList.push(l2.val);
            l2 = l2.next;
        }

        while (l2 !== null && (l1 === null || (l1 !== null && l2.val < l1.val))) {
            mergedList.push(l2.val);
            l2 = l2.next;
        }
        return merge(l1, l2, mergedList);
    };
    return merge(l1, l2, []);
};
