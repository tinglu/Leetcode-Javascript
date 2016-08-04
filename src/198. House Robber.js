/**
 * @param {number[]} nums
 * @return {number}
 */
/*
[2, 1, 1, 2]
recurrent relation is: m(i) = max{m(i - 1), m(i - 2) + i}


m(0) = max{i} = 2
m(1) = max{m(0), 1} = 2
m(2) = max{m(1), m(0) + 1} = 3
m(3) = max{m(2), m(1) + 2} = 4
*/
var rob = function(nums) {
    // this only works for adjacency step = 2
    // var l = nums.length;
    // if (l <= 0) return 0;
    // if (l === 1) return nums[0] === null ? 0 : nums[0];
    // var a, b;
    // if (l >= 2) {
    //     a = nums[0] === null ? 0 : nums[0];
    //     b = nums[1] === null ? 0 : nums[1];
    // }
    // if (l === 2) return Math.max(nums[0], nums[1]);

    // var total = [a, b];
    // var tmp;
    // for (var i = 2; i < l; i++) {
    //     tmp = nums[i] === null ? 0 : nums[i]
    //     total.push(Math.max(total[i - 1], tmp + total[i - 2]));
    // }
    // return total[l - 1];

    var a = 0;
    var b = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            a = Math.max(a + nums[i], b);
        } else {
            b = Math.max(b + nums[i], a);
        }
    }
    return Math.max(a, b);
};
// console.log(rob([2, 1, 1, 2]));
