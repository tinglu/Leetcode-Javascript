// Reverse a singly linked list.
//
// Hint:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

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
// var reverseList = function(head) {
//   // var list = [];
//   // if (head === null) return list;
//   // var reverse = function (prev, next) {
//   //     list.unshift(prev);
//   //     if (next === null) {
//   //         return;
//   //     }
//   //     var tmp = next.next;
//   //     next.next = prev;
//   //     return reverse(next, tmp);
//   // };
//   // reverse(head, head.next);
//   // return list;
//
//   var node = head;
//   var previous = null;
//
//   while(node) {
//     // save next or you lose it!!!
//     var save = node.next;
//     // reverse pointer
//     node.next = previous;
//     // increment previous to current node
//     previous = node;
//     // increment node to next node or null at end of list
//     node = save;
//   }
//   return previous;   // Change the list head !!!
// };

var reverseList = function (head) {
  if (head === null) return null;
  var reverse = function (prev, next) {
    if (next === null) {
      return prev;
    }
    var tmp = next.next;
    next.next = prev;
    return reverse(next, tmp);
  };
  return reverse(null, head);
};