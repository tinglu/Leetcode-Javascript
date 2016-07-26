/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    var countsMapping = [0, 1, 2];
    var startN = 3;
    while (startN <= n) {
        countsMapping[startN] = countsMapping[startN - 1] + countsMapping[startN - 2];
        startN++;
    }
    return countsMapping[n];
};
