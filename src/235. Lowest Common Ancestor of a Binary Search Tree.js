/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) return root;
    if (Math.max(p.val, q.val) < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (Math.min(p.val, q.val) > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (p.val <= root.val && q.val >= root.val || q.val <= root.val && p.val >= root.val) {
        return root;
    }
};
