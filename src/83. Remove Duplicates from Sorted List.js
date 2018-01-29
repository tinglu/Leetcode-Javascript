// Given a sorted linked list, delete all duplicates such that each element appear only once.
//
// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

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
var deleteDuplicates = function (head) {
  var list = [];
  var purifyList = function (node, lt) {
    if (node === null) return lt;
    var value = node.val;
    if (lt.indexOf(value) < 0) {
      lt.push(value);
    }
    return purifyList(node.next, lt);
  };
  return purifyList(head, list);
};