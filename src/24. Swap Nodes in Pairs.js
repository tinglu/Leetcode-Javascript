// Given a linked list, swap every two adjacent nodes and return its head.
//
// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.
//
// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

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
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  var left = head;
  var right = head.next;

  var newHead = head.next;
  var next = right.next;


  right.next = left;
  left.next = swapPairs(next);

  return newHead;
};
/**
 var swapPairs = function(head) {
  if(head === null) return null
  if(head.next === null) return head
  let first = head,
      second = head.next
  while(first != null && second != null){
    var tmp = first.val
    first.val = second.val
    second.val = tmp
    //move
    first = second.next
    if(first != null) second = first.next
    else second = null
  }
  
  return head
};
 */
