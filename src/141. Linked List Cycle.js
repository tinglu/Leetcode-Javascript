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

/**
Suppose there is a cycle existing in the linked list, then runner will meet walker otherwise cycle does not exist.
var hasCycle = function(head) {
  if(head === null) return false
  let walker = head
  let runner = head
  while(runner.next != null && runner.next.next != null){
    walker = walker.next
    runner = runner.next.next
    if(walker.val === runner.val) return true
  }
  return false; 
};
 */
// TODO: to be revised
var hasCycle = function(head) {
  if (head === null) return false;
  var loop = function(node) {
    if (node.visited) return true;
    node.visited = true;
    if (node.next === null) {
      return false;
    }
    return loop(node.next);
  };
  return loop(head);
};
