var root = new TreeNode(2);
var p = root.left = new TreeNode(3);
var q = root.right = new TreeNode(4);
console.log(lowestCommonAncestor(root, p, q));
