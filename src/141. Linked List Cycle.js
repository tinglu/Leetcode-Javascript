// Given a linked list, determine if it has a cycle in it.
//
// Follow up:
// Can you solve it without using extra space?

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

 Two Pointers
 let array = [1,2,3,4,5,6,7,8,9,10]


 for(var first = 0, last = array.length - 1; first < last; first++, last--){
  if(array[first] % 2 === 0 && array[last] % 2 === 0){
    let tmp = array[first]
    array[first] = array[last]
    array[last] = tmp
  }else if(array[first] % 2 === 0){
    first--
  }else if(array[last] % 2 === 0){
    last--
  }
}
 */
// TODO: to be revised
var hasCycle = function (head) {
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
