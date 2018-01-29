// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  var stack = [];
  var max = 0;
  root.depth = 1;
  stack.push(root);

  var dfs = function (node) {
    if (node === null) {
      return;
    }
    if (node.depth > max) {
      max = node.depth;
    }
    if (node.left !== null) {
      node.left.depth = node.depth + 1;
      stack.push(node.left);
    }
    if (node.right !== null) {
      node.right.depth = node.depth + 1;
      stack.push(node.right);
    }
  }

  while (stack.length > 0) {
    var node = stack.pop();
    dfs(node);
  }

  return max;
};
